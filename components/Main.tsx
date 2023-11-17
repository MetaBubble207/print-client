"use client";

import { useEffect, useRef, useState } from "react";

export default function Main() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState(false);
  const messageToast = useRef(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("选中的文件:", file);
  };

  const handlePrint = async () => {
    if (!selectedFile) {
      alert("未选择文件");
      return;
    }

    // 创建 FormData 对象
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("https://pit.cclucky.top/minio/upload", {
        method: "POST",
        body: formData,
      });

      // 进行消息提示
      setMessage(true)

      // 处理响应
      if (res.ok) {
        alert("打印任务进行中");
      } else {
        alert("文件打印失败");
      }
    } catch (error) {
      alert("发生错误: " + error);
    }
  };

  // 开启和关闭弹窗
  useEffect(() => {
    if (message) {
      const modal: any = messageToast.current;
      modal.showModal();
      setTimeout(() => {
        modal.close()
        setMessage(false)
      }, 2000)
    }
  }, [message]);

  return (
    <div className="flex justify-center items-center flex-col p-6">
      <div className="w-auto h-full flex flex-col justify-center items-center relative">
        <input
          onChange={handleFileChange}
          type="file"
          className="file-input file-input-bordered file-input-lg w-full max-w-xs"
        />
        <span className="text-sm font-medium absolute left-0 -bottom-5">
          或者把文件拖动到这里
        </span>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handlePrint}
        >
          打印
        </button>
      </div>

      <dialog ref={messageToast} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">打印服务</h3>
          <p className="py-4">已发送打印任务</p>
        </div>
      </dialog>
    </div>
  );
}
