import { forwardRef } from "react";

const Bubble = forwardRef(function Bubble({ children }, ref) {
   return (
      <div className="flex relative bg-gray-50 py-2 px-3 rounded-es-xl w-fit rounded-e-xl ms-8 mb-2" ref={ref}>
         {children}
      </div>
   );
});

export default Bubble;
