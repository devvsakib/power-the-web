import React from "react";
import data from "../../Contributors.json";

function Contributors() {
  return (
    <div className="container">
      <div className="details text-center text-uppercase">
        <h1 className="title text-3xl"> Our Contributors </h1>
        <p className="sub-title"> Thanks To All Contributors. Join Us </p>
      </div>

      <div>
        {data.profiles.map(({ name, github, twitter, avatarUrl }) => {
          return (
            <ul className="contributors-list grid gap-4 place-items-center" id="contributors" >
              <div className="contributor-card m-1 w-[15rem]">
                <div className="rounded-3xl overflow-visible shadow-xl max-w-[240px] h-[350px] my-3 p-4">
                  <img
                    src={avatarUrl}
                    className="rounded-full border-solid border-white border-2 mt-3"
                    alt="avatarUrl"
                  />
                  <div>
                    <h2 className="text-center text-2xl font-bold">${name}</h2>
                    <div className="flex justify-evenly items-center ">
                      <a href="https://github.com/${github}">
                        <img
                          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                          className="w-10"
                          alt="github"
                        />
                      </a>
                      <a href="https://twitter.com/${twitter}">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2111/2111738.png"
                          className="w-8"
                          alt="tritter"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Contributors;
