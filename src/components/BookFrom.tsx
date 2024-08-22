import React from "react";
// import img from '../../public/images/book-car/book-bg.png'

export default function BookFrom() {
  return (
    <form className="max-w-[1248px] mx-auto mb-[120px] bg-textBody">
      <div>
        <div>
          <label>Select your car type <span>*</span></label>
          <input type="text" placeholder="Select your car type" />
        </div>
        <div>
          <label>Select your car type <span>*</span></label>
          <input type="text" placeholder="Select your car type" />
        </div>
      </div>
    </form>
  );
}
