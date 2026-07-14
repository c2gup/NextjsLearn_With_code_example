import React from "react";

function userLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-white">
        This is user layout, it will wrap all the pages inside user folder
      </div>
      {children}
      <div className="text-2xl font-semibold text-white">
        This is all about user layout, it will wrap all the pages inside user
        folder
      </div>
    </div>
  );
}

export default userLayout;
