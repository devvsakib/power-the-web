import React from "react";
import data from "../../Contributors.json";

function Contributors() {
  return (
    <div className="w-full">
      <div className="text-center text-uppercase m-8">
        <h1 className="text-4xl font-semibold"> Our Contributors </h1>
        <p className="text-base"> Thanks To All Contributors. Join Us </p>
      </div>

      <div>
        <ul className="grid gap-x-4 gap-y-4 place-items-center grid-cols-custom">
          {data.profiles.map(({ name, github, twitter, avatarUrl }) => {
            return (
              <div className="contributor-card m-1 w-60" key={github}>
                <div className="rounded-3xl overflow-visible shadow-xl max-w-[240px] h-[350px] my-3 p-4">
                  <img
                    src={avatarUrl}
                    className="rounded-full border-solid border-white border-2 mt-3"
                    alt="avatarUrl"
                  />
                  <div>
                    <h2 className="text-center text-2xl font-bold m-2">
                      {name}
                    </h2>
                    <div className="flex justify-evenly items-center ">
                      <a href={`https://github.com/${github}`}>
                        <img
                          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                          className="w-10"
                          alt="github"
                        />
                      </a>
                      <a href={`https://twitter.com/${twitter}`}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2111/2111738.png"
                          className="w-8"
                          alt="twitter"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Contributors;
