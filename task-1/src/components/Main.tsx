// Main.js
import C1 from './C1';

export default function Main() {
  return (
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-3 gap-4">
        <C1 />
        <C1 />
        <C1 />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <C1 />
        <C1 />
      </div>
    </div>
  );
}