export default function Main() {
  return (
    <div className="flex justify-center items-center flex-col p-6">
      <div className="w-auto h-full flex flex-col justify-center items-center relative">
        <input
          type="file"
          className="file-input file-input-bordered file-input-lg w-full max-w-xs"
        />
        <span className="text-sm font-medium absolute left-0 -bottom-5">
          或者把文件拖动到这里
        </span>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">打印</button>
      </div>
    </div>
  );
}
