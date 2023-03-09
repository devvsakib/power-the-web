import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/base"
import { useState } from "react";

// check if username exits in localstorage


const Signup = () => {


    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignup = async e => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    localStorage.setItem("username", username);
                    location.href = "/";
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        } catch (error) {
            alert(error);
        }
    };


    return (
        <div className='-z-10'>
            <div className="isolate  bg-[#0e0327] text-left pb-24 pt-5 px-6 sm:pb-32 lg:px-8">
                {/* <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg
                        className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC" />
                                <stop offset={1} stopColor="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div> */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Sign Up to BLOG</h2>
                </div>
                <form onSubmit={handleSignup} method="POST" className="mx-auto mt-5 max-w-xl sm:mt-5">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6">
                                Username
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="family-name"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset bg-black text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset bg-black text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6">
                                Password
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="password"
                                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset bg-black text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6">
                                Confirm Password
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    autoComplete="password"
                                    className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset bg-black text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        // onclick={handleSignup}
                        >
                            Signup
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup;