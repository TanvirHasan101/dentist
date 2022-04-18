import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 text-left mt-5 ms-5 ps-5'>
            <div>
                <h3>Difference between authorization and authentication:</h3>
                <p><b>Ans:</b> Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.

                </p>
            </div>

            <div>
                <h3>Why are you using firebase? What other options do you have to implement authentication?

                </h3>
                <p><b>Ans:</b> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                </p>
            </div>

            <div>
                <h3>What other services does firebase provide other than authentication</h3>
                <p><b>Ans:</b> Firebase provide many other things besides authentication. Such as, <br />
                    1.Open Source Backend Platform, <br />
                    2. Parse Hosting Platform, <br />
                    3. Mobile Backend and API Services Platform; <br />
                    4.Real-time APIs and Global Messaging. etc  <br />

                </p>
            </div>


        </div>
    );
};

export default Blogs;