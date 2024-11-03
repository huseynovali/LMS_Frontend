import React from "react";
import { accoundData } from "../../fakedata";

function AboutMe() {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Məlumatlarım</h1>

        <div className="mt-5">
          {accoundData?.email && (
            <div>
              <span className="font-semibold">Email : </span>
              {accoundData?.email}
            </div>
          )}

          <div className="mt-3">
            <span className="font-semibold">Tel : </span>
            {accoundData?.phone}
          </div>
          {accoundData?.point && (
            <div className="mt-3">
              <span className="font-semibold">Giriş balı : </span>
              {accoundData?.point}
            </div>
          )}
          {accoundData?.university && (
            <div className="mt-3">
              <span className="font-semibold">Universitet : </span>
              {accoundData?.university}
            </div>
          )}

          {accoundData?.faculty && (
            <div className="mt-3">
              <span className="font-semibold">Fakültə : </span>
              {accoundData?.faculty}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
