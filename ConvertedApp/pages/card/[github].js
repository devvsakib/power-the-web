import React, { Fragment, useEffect, useRef, useState } from 'react'
// import  {toPng} from 'html-to-image';
import { useRouter } from 'next/router'
import Layout from '@/components';
import * as htmlToImage from 'html-to-image';

import contributorData from "/json/Contributors.json";
import ContributorCardTemplate from "/Components/Card/ContributorCardTemplate";
import { toast } from 'react-toastify';

const CardC = () => {
const router=useRouter()
const { github } = router.query;


  const embedCodeRef = useRef(null);
  const contributorCardRef = useRef(null);
  const [contributorCard, setContributorCard] = useState("");

  const [profile, setProfile] = useState({});
  const [generateCardLoading, setGenerateCardLoading] = useState(false);


  useEffect(() => {
    let myProfile = contributorData?.profiles.filter(item => item?.github === github);
    if (myProfile?.projects) {
      myProfile.projects = myProfile.projects.filter(project => project.startsWith('https://github.com/devvsakib/power-the-web/tree/main/PROJECTS'))
    }
    setProfile(myProfile);
    console.log(profile)
  }, [github,profile]);

  useEffect(() => {
    if (embedCodeRef.current) {
      embedCodeRef.current.innerHTML = `<a href="https://ptwa.vercel.app"><img src="${contributorCard}" width="400" alt="${github} Contributor Card"/></a>`;
    }
  }, [contributorCard, github])

  const generateHandler = () => {
    setGenerateCardLoading(true);
    const template = contributorCardRef.current
    htmlToImage.toPng(template,{ find: (node) => (node.tagName !== 'i') })
      .then(dataUrl => {
        setContributorCard(dataUrl);
      })
      .catch(er => {
        console.log(er);
      })
      .finally(() => {
        setGenerateCardLoading(false);
      })
  }

  const downloadHandler = () => {
    let link = document.createElement('a');
    link.download = `${profile?.github ?? 'contributor-card'}.svg`;
    link.href = contributorCard;
    link.click();
  }

  const copyEmbedCodeHandler = async () => {
    try {
      await navigator.clipboard.writeText(embedCodeRef.current.value);
      toast('Text copied to clipboard');
    } catch (error) {
      toast('Failed to copy embed code');
    }
  };
console.log(github);
  return (
    <Layout>
      <div className='w-full px-10 mt-8 mb-[23vh]'>
        <div className='mb-12 text-center text-white'>
          <h1 className='text-2xl sm:text-4xl'>Grab your Contributor Card</h1>
          <p className='text-sm sm:text-lg'>Your Contributor Card will show you how many projects you've submitted</p>
        </div>
        <div className='sm:flex sm:flex-row justify-center gap-[2rem]'>
          <div className='card-box hover:from-[#9d08d8] hover:to-[#711fce] transition-all ease-linear delay-80 duration-300 hover:scale-110 hover:transition-all'>
            <div className='relative'>
              <ContributorCardTemplate profile={profile} ref={contributorCardRef} />
              <label className='absolute top-[182px] left-[62px] pt-2 pl-8 pr-8 pb-2 rounded-full bg-[#00000063] text-center text-white font-semibold'>Preview Card</label>
            </div>
          </div>
          <div className='card-info'>
            <div className='mt-[20px]'>
              <div>
                <p className='mt-[20px] text-white text-lg'>
                  This is a fantastic concept where you can <br /> show off how many contributed projects you've submitted
                </p>
                <p className='font-[600] mt-[15px] text-white text-lg'>You can display contributor card to your github profile.</p>
              </div>

              <div className='sm:text-left text-center mt-[20px]'>
                {
                  (contributorCard === "") &&
                  <button onClick={generateHandler} className="pl-4 pr-4 pt-1 pb-2 text-[#eac20d] border-[#eac20d] font-[800] rounded-[10px] border-2 hover:bg-[#eac20d] hover:text-white hover:border-[#ffffff]">
                    {
                      generateCardLoading &&
                      <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                      </svg>
                    }
                    Generate My Card
                  </button>
                }
              </div>
            </div>
            {
              (contributorCard) &&
                <Fragment>
                  <button onClick={downloadHandler} className="mr-2 pl-4 pr-4 pt-1 pb-2 bg-[#eac20d] text-[#ffffff] border-[#ffffff] font-[800] rounded-[10px] border-2 hover:bg-[#ffffff] hover:text-[#eac20d] hover:border-[#ffffff]">
                    Download
                  </button>
                  <p className='mb-[15px] text-white text-[16px] font-[600] text-[#eac20d]'>
                    Donwload and show off your contribution card to <br />your github profile.
                  </p>
                  <h2 className='text-white font-[600]'>Embed</h2>
                  <div className='rounded-[10px] overflow-hidden mt-1'>
                    <textarea ref={embedCodeRef} className="scrollbar-thin scrollbar-thumb-[#dedede] scrollbar-track-[#dedede] overflow-y-scroll py-2 px-4 w-[100%] h-[115px] sm:w-90 resize-none mb-[-12px]" readOnly="" wrap="hard" />
                  </div>
                  <div>
                    <button onClick={copyEmbedCodeHandler} className="mt-2 pl-2 pr-2 pb-1 text-[#ffffff] border-[#ffffff] font-[800] rounded-[10px] border-2 hover:bg-[transparent] hover:text-[#eac20d] hover:border-[#eac20d]">Copy code</button>
                  </div>
                </Fragment>
            }
          <p className='font-[500] mt-[15px] text-white text-md'>See the docs <a href="https://github.com/devvsakib/power-the-web/blob/main/docs/contributor-card.md" target="_blank" className='text-[#eac20d]' rel="noreferrer">Here</a> how to add your project to your contributor card</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CardC
