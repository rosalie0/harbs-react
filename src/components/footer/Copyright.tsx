import React from "react";

function Copyright() {
  /*
  1. The copyright symbol © or the word “copyright”
  2. The name of the copyright owner or author of the work
  3. The year the content was published, which can be different from the year of creation
  4. Your statement of the rights you’re reserving over the materials
  */
  return (
    <div
      id="footer"
      className="bg-yellow-200 opacity-80 rounded-b-lg flex gap-1 flex-col md:flex-row items-center flex-wrap justify-center align-middle p-4 border-t dark:border-stone-500"
    >
      <p className="text-sm font-source italic">
        © 2023 Rose Newman | NOT officially affiliated with HARBS
      </p>
    </div>
  );
}

export default Copyright;
