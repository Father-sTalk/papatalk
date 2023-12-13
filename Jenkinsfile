def    m5_xlarge = "java-docker-slave"
def    registry = "729097534527.dkr.ecr.ap-northeast-2.amazonaws.com"
def    repository = "inapp-sub-kiwoom"
def    ecr_cred = "ecr:ap-northeast-2:jenkins-aws-cred"
def    git_branch = ""
def    git_url = "git@bitbucket.org:ezardev-admin/inapp-sub-kiwoom.git"
def    deploy_url = "git@bitbucket.org:ezardev/inapp-deploy.git"
def    git_commit = null

pipeline { // 최 상단 element로 정의되어 있어야 한다.

    agent {
        label "java-docker-slave"
    }// pipeline 블록 내 최 상단에 정의되어야 하며, 말 그대로 실행할 Agent가 할당된다. 여기서 'any'는 사용가능한 어떠한 agent로도 실행해도 된다는 걸 나타낸다. 이는 pipeline 아래 위치해도 되고 각 stage 블록에 위치해도 된다.
    options {
        skipStagesAfterUnstable()
        skipDefaultCheckout() 
    }
    stages{
        stage('Checkout'){
            steps{
                script{
                    git_branch=sh(returnStdout: true, script: "echo $branch").trim() 
                }
                checkout([
                      $class: 'GitSCM',
                      branches: [[name: git_branch]],
                      extensions: [[
                        $class: 'CloneOption',
                        shallow: true,
                        depth:   1,
                        timeout: 30
                      ],
                      [
                        $class: 'RelativeTargetDirectory',
                        relativeTargetDir: 'target'
                      ]],
                      userRemoteConfigs: [[
                        url:           git_url,
                        credentialsId: 'bitbucket'
                      ]]
                    ])
                    
            }
        }
        stage('Test CI '){
              steps{    
                    script{
                        try{
                            sh """
                            cd target 
                            docker build  -f Dockerfile.test -o out .
                            """
                            
                        }catch(e){
                            echo "test ci failed" + e
                            sh 'exit 1'
                        }
                        
                    }
                
              }
        }
        stage('Build docker image'){
              steps{    
                script{
                    try{
                        git_commit=sh(returnStdout: true, script: "cd target && git rev-parse --short HEAD").trim()
                        sh """
                        cd target
                        docker build -t ${registry}/${repository}/${git_branch}:${git_commit} -f Dockerfile.${git_branch} .
                        """
                        
                    }catch(e){
                        echo "docker build failed" + e
                        sh 'exit 1'
                    }
                }
              }
        }
        stage('Push docker image'){
            steps{
                withDockerRegistry([credentialsId: ecr_cred, url: "https://"+registry+"/"+repository]){
                    sh """
                    cd target
                    docker push  ${registry}/${repository}/${git_branch}:${git_commit}
                    docker tag ${registry}/${repository}/${git_branch}:${git_commit} ${registry}/${repository}/${git_branch}:latest
                    docker push ${registry}/${repository}/${git_branch}:latest
                    """
                }
            }
        }
        stage('update image tag'){
            steps{
                checkout([
                      $class: 'GitSCM',
                      branches: [[name: "${repository}-${git_branch}"]],
                      extensions: [[
                        $class: 'RelativeTargetDirectory',
                        relativeTargetDir: 'deploy'
                      ]],
                      userRemoteConfigs: [[
                        url:           deploy_url,
                        credentialsId: 'bitbucket'
                      ]]
                    ])
                    script{
                        try{
                            sh """
                            cd deploy
                            git remote set-url origin ${deploy_url}
                            if ! grep -q ${git_commit} chart/${repository}/values-${git_branch}.yaml; then
                                sed -i 's/tag:.*/tag: "${git_commit}"/g' chart/${repository}/values-${git_branch}.yaml
                                git add chart/${repository}/values-${git_branch}.yaml
                                git commit -m "${git_commit} for ${repository}-${git_branch}"
                                git push -f origin HEAD:${repository}-${git_branch}
                            else
                                echo 'same tag is already committed' 
                            fi
                            """
                                
                            }catch(e){
                                echo "docker build failed" + e
                                sh 'exit 1'
                            }
                    }
                    
            }
        }

    }
}
