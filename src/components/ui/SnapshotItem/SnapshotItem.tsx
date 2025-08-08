import type { ISnapshot } from "@/util/types";
import Button from "../buttons/Button";

export default function SnapshotItem({ snapshot }: { snapshot: ISnapshot }) {
  return (
    <div className="w-full flex flex-col gap-1 pb-4 border-b-1 border-b-solid border-b-coolgray-50">

      {/* NAME */}
      <div className="font-medium text-coolgray-900">{snapshot.name}</div>

      {/* LAST UPDATED & SIZE */}
      <div className="flex flex-col-reverse gap-1 md:flex-row md:justify-between">
        <span className="text-coolgray-500">Last updated: {snapshot.last_modified}</span>
        <span className="text-coolgray-500">Size: {formatSize(snapshot.size)}</span>
      </div>

      {/* URL / DOWNLOAD BUTTON */}
      <Button
        type="link"
        label="Download"
        href={snapshot.url}
        className="w-fit mt-2"
      />

    </div>
  )
}
function formatSize(bytes: number): string {
  if (bytes === 0) return '0 bytes';
  const units = ['bytes', 'KB', 'MB', 'GB'];
  const k = 1024;
  const i = Math.floor(bytes === 0 ? 0 : Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);
  const formatted = i === 0
    ? value.toLocaleString()
    : value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${formatted} ${units[i]}`;
}