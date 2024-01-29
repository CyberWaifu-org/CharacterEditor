"use client";
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import React, { useState } from "react";

function CC() {
  const [isCCloading, setIsCCloading] = useState(false);

  return (
    <div>
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm font-medium text-yellow-800">
              此页面数据和角色卡编辑器不互通,处理将会压缩角色卡并将第一条消息替换为CC协议页
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <RadioGroup
          label="选择你的CC许可证协议[4.0]"
          color="primary"
          defaultValue="NC"
        >
          <Radio
            color="success"
            value="BY"
            description="允许他人以任何目的、任何媒介，甚至商业目的使用作品，只要提供适当的署名给原作"
          >
            CC BY （署名）
          </Radio>
          <Radio
            color="success"
            value="NC"
            description="允许他人以任何目的使用作品，但不允许用于商业目的"
          >
            CC BY-NC （非商业性使用）
          </Radio>
          <Radio
            color="danger"
            value="ND"
            description="允许他人下载作品并与他人共享，但不允许对作品进行修改或以其为基础进行新的创作"
          >
            CC BY-ND （禁止演绎）
          </Radio>
          <Radio
            color="success"
            value="SA"
            description="允许他人以任何目的使用、修改、演绎作品，但新作品必须使用相同的许可协议"
          >
            CC BY-SA （相同方式共享）
          </Radio>
          <Radio
            color="warning"
            value="NCND"
            description="允许他人以任何目的使用、修改、演绎作品，但新作品必须使用相同的许可协议。不允许商业性使用，即不可在商业活动中使用作品。他人必须提供适当的署名给原作者"
          >
            CC BY-NC-ND （署名-非商业性使用）
          </Radio>
          <Radio
            color="warning"
            value="NCSA"
            description="允许他人以任何目的使用、修改、演绎作品，但新作品必须使用相同的许可协议。不允许商业性使用，即不可在商业活动中使用作品。他人必须提供适当的署名给原作者。"
          >
            CC BY-NC-SA （署名-相同方式共享）
          </Radio>
        </RadioGroup>
      </div>
      <div className="pt-4">
        <form encType="multipart/form-data">
          <label className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <input type="file" className="hidden" />
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
              />
            </svg>
            <Button
              isDisabled
              isLoading={isCCloading}
              className="mt-2 text-center text-sm font-semibold text-gray-900"
            >
              上传角色卡 不支持批量 ≤10MB
            </Button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default CC;