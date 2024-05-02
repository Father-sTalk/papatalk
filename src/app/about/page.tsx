import React from "react";

import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="w-full h-[90vh] pt-[6.25rem] flex gap-6">
      <div className="w-[50%] h-[25rem] p-6">
        <Image
          src="/img/about/hands.png"
          alt="아이와 나"
          width={608}
          height={350}
        />
      </div>
      <div className="w-[50%] h-[25rem] p-6">
        <div className="w-full h-full p-6 bg-gradient-to-b from-primary-100 to-white rounded-2xl text-body1">
          <div className="">
            <p>안녕하세요.</p>
            <p className="text-secondary-500 font-bold">
              저는 아이가 제 손을 잡은 첫날의 감동을 안고 사는 아빠입니다.
            </p>
            <p className="text-secondary-500 font-bold">
              또 아내에게 누구보다 사랑받고 싶은 남편입니다.
            </p>
          </div>
          <div>
            <p>잘하고 싶은 것과 잘하는 것은 엄연히 다르지요.</p>
            <p>노력하는 것과 잘하는 것 또한 다른 길 입니다.</p>
            <p>
              어떻게 하면 아빠로서, 남편으로서 부족함이 없을 수 있나 혼자
              고민하는 날들..
            </p>
          </div>
          <div>
            <p>
              아빠들도 힘들때 같이 이야기하고 소통하고 하소연 할 곳이 있었으면..
            </p>
            <p>노력하는 방향이 그 시간과 노력이 낭비되지 않았으면..</p>
            <p>파파야는 그런 곳이었으면 좋겠습니다.</p>
            <p className="text-primary-500 font-bold">
              멋진 아빠, 사랑받는 남편으로서의 당신의 삶을 응원합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
