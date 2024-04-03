"use client";
import React from "react";
import type { FormEvent } from "react";

import { Input } from "@nextui-org/react";

import { BtnBasic } from "@/components/bootstrap/button/btn_basic";
import DropdownBasic from "@/components/bootstrap/dropdown/dropdown_basic";
import InputFile from "@/components/bootstrap/input/input_file";
import TextareaBasic from "@/components/bootstrap/textarea/textarea_basic";
import useCommunityArticleMutation from "@/models/hooks/community/post_communityArticle.hooks";

const CommunityCreatePage: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("육아");
  const [image, setImage] = React.useState<File | null>(null);

  const { mutate } = useCommunityArticleMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      title,
      content,
      category,
      images: image ? [image] : [],
    };
    mutate(data);
  };

  return (
    <section className="min-h-[80vh]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row p-6 gap-4 items-end">
          <Input
            type="text"
            label="제 목"
            value={title}
            variant="bordered"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해 주십시오."
            labelPlacement="outside"
            className="text-base"
          />
          <DropdownBasic
            list={["육아", "임신"]}
            selected={category}
            setSelected={setCategory}
          />
        </div>
        <div className="flex flex-col px-6">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-2">내 용</label>
            <TextareaBasic
              value={content}
              onChange={setContent}
              placeholder="내용을 입력해 주십시오."
              rows={12}
              className="h-full resize-none border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
          </div>
          <div className="flex flex-row justify-between py-6">
            <InputFile
              onFileChange={(file) => {
                setImage(file);
              }}
              color="default"
              size="md"
            />
            <div className="flex flex-row gap-4">
              <BtnBasic type="button" size="md" color="primary">
                취 소
              </BtnBasic>
              <BtnBasic type="submit" size="md" color="primary">
                완 료
              </BtnBasic>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CommunityCreatePage;
