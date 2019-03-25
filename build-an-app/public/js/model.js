var model ={
    "start": {
        "image": "images/1.png",
        "text" : "Are you ready?",
        "actions" : [
            {
                "text": "Accept Challenge",
                "next": "challenge-accepted"
            }
        ]
    },
    "challenge-accepted" : {
        "image": "images/11.png",
        "text" : "How do you approach?",
        "actions" : [
            {
                "text" : "Start by building a web app",
                "next": "are-you-sure-about-webapp"
            },
            {
                "text" : "Start by building a API Backend",
                "next" : "start-with-apibackend"
            }
        ]
    },
    "start-with-apibackend" : {
        "image" : "images/2.png",
        "text" : "Web, Mobile, Voice are different channels on how your users will experience your store functionality, features. Best practice is to build your functionality/features as a independent service (usually referred to a backend application) with well defined remote interefaces (APIs), Good Choice, what's Next?",
        "actions": [
            {
                "text": "Let's get coding",
                "next" : "lets-get-coding"
            },
            {
                "text" : "Let's define the API Spec",
                "next" : "lets-define-api-spec"
            }
        ]
    },
    "lets-get-coding": {
        "image": "images/blank.png",
        "text": "While it's tempting to get coding, remember other applications (web, mobile, voice) are dependent on your work, and they are usually developed by different teams (there's a hint here), so its usually a best practice to start with an OpenAPI specification to describe the application's interfaces and make sure this will help deliver the user experiences you (your business) wants to deliver",
        "actions": [
            {
                "text": "Ok, got it, Go back",
                "next": "start-with-apibackend"
            }
        ]

    },
    "are-you-sure-about-webapp": {
        "image": "images/blank.png",
        "text" : "Web, Mobile, Voice are different channels on how your users will experience your store functionality, features. Best practice is to build your functionality/features as a independent service (usually referred to a backend application) with well defined remote interefaces (APIs)",
        "actions": [
            {
                "text": "Ok, got it, Go back",
                "next": "challenge-accepted"
            }
        ]
    },
    "lets-define-api-spec" : {
        "image" : "images/3.png",
        "text" : "It's a good practice to start with spec and make sure, it will help deliver the kind of user experience you want to deliver, Good Choice!, whats next?",
        "actions": [
            {
                "text": "Let's implement the spec",
                "next" : "lets-implement-the-spec"
            },
            {
                "text": "Let's setup a sandbox with Mock",
                "next" : "lets-setup-a-sandbox-with-mock"
            }
        ]
    },
    "lets-implement-the-spec": {
        "image": "images/blank.png",
        "text" : "Again, while its tempting to start coding and implement the spec, remember other teams (UX) who might be waiting on you until your backend is ready. In the interest of speed and productivity of the overall teams, its a best practice to setup a sandbox first, before you are gone coding",
        "actions": [
            {
                "text": "Ok, got it, Go back",
                "next": "lets-define-api-spec"
            }
        ]
    },
    "lets-setup-a-sandbox-with-mock":{
        "image": "images/4.png",
        "text" : "Good Choice!, Setting up a sandbox is quick and enables other teams (UX in this case) to start playing with it, before the real backend is ready. More importantly, you might also get feedback on the APIs itself, if its not enough to deliver the intended user experience, What's next?",
        "actions": [
            {
                "text": "Build a webapp to test User Experience",
                "next" : "build-webapp-test-user-experience"
            },
            {
                "text" : "Assemble teams for building web, mobile and voice apps",
                "next" : "assemble-teams-building-web-mobile-voice-apps"
            }
        ]
    },
    "build-webapp-test-user-experience" : {
        "image" : "images/blank.png",
        "text" : "Remember the hint?, While it's a good idea to test it out, usually channel experiences are built by dedicated teams",
        "actions" : [
            {
                "text": "Ok, got it, Go back",
                "next": "lets-setup-a-sandbox-with-mock"
            }
        ]
    },
    "assemble-teams-building-web-mobile-voice-apps" : {
        "image": "images/5.png",
        "text" : "While you might be thinking, whether assembling the UX teams is the first step or whether it fits here, Remember you need to have this sorted atleast at this stage when you have the sandbox ready, if you can do it earlier, its even better and gives them an opportunity to collaborate on the API spec as well, So far very good, What's next?",
        "actions" : [
            {
                "text" : "Create a pdf API doc and send it to UX team",
                "next" : "create-pdf-send-to-ux-teams"
            },
            {
                "text": "Publish the APIs in a portal, enable Self-service access for other teams",
                "next" : "publish-apis-portal-enable-self-service"
            }
        ]
    },
    "create-pdf-send-to-ux-teams" : {
        "image" : "images/blank.png",
        "text" : "It's good to enable self-service collaboration between teams from the start, having manual processes to share docs or getting access or getting credentials slows down all the teams and extremely inefficient",
        "actions" : [
            {
                "text": "Ok, got it, Go back",
                "next": "assemble-teams-building-web-mobile-voice-apps"
            }
        ]
    },
    "publish-apis-portal-enable-self-service" : {
        "image" : "images/6.png",
        "text" : "Good Going, Self-service FTW!!, Portal is the go-to place all your dependent teams (API Consumers), where they can discover new APIs, learn how to use them (you can publish documents based on your OpenAPI spec), get access and start building application using them. Now how to implement the backend",
        "actions" : [
            {
                "text" : "Let's start building in java",
                "next" : "lets-start-building-java"
            },
            {
                "text" : "Let's break this down into Microservices",
                "next" : "lets-break-down-microservices"
            }
        ]
    },
    "lets-start-building-java": {
        "image": "images/blank.png",
        "text": "You can chose any programming language of your choice, but make sure you spent time thinking about the application architecture, so that it helps you not only build faster, but also manageable in the long term as your application functionality grows over time",
        "actions" : [
            {
                "text": "Ok, got it, Go back",
                "next": "publish-apis-portal-enable-self-service"
            }
        ]
    },
    "lets-break-down-microservices" : {
        "image" : "images/7.png",
        "text" : "There are several application architectures, Microservices is one of them and is gaining lot of momemtum among developers and even businesses for the benefits it brings (you sure would have heard about them), if you are starting new, it might be better for you to design your applications in microservices based architecture, Most of the times its helpful",
        "actions" : [
            {
                "text" : "Got the requirements, lets go coding",
                "next" : "got-the-requirements-lets-go-coding"
            },
            {
                "text" : "Lets separate business logic vs business policy",
                "next" : "lets-separate-business-logic-business-policy"
            }
        ]
    },
    "got-the-requirements-lets-go-coding": {
        "image": "images/blank.png",
        "text": "Before you code, lets also make sure what needs to be codified vs configured, have you identified the business logic vs business policie and how to implement them?",
        "actions" : [
            {
                "text": "Ok, got it, Go back",
                "next": "lets-break-down-microservices"
            }
        ]
    },
    "lets-separate-business-logic-business-policy" : {
        "image" : "images/8.png",
        "text" : "Carefully separate Business logic vs Business Policy, code only your business logic, leverage platform capabilities (have you chosen your platform yet?) to apply business policies",
        "actions" : [
            {
                "text" : "Write new microservies for Business Policies",
                "next" : "write-new-microservices-for-biz-policies"
            },
            {
                "text": "Leverage platform capabilities to configure Business Policies",
                "next" : "leverge-platoform-configure-biz-policies"
            }
        ]
    },
    "write-new-microservices-for-biz-policies" : {
        "image": "images/blank.png",
        "text": "If you are chosing the right platform to build applications, you don't need to actually code your business policies, the platform usually provides you the option to configure them",
        "actions" : [
            {
                "text": "Ok, got it, Go back",
                "next": "lets-separate-business-logic-business-policy"
            }
        ]
    },
    "leverge-platoform-configure-biz-policies" : {
        "image" : "images/9.png",
        "text" : "Modern applications are built on application development platforms that are cloud-native, provides tools for developers to build and manage their applications. They also provide ability for developers to configure policies / rules for their applications ranging from security, traffic management, monitoring and analytics. [in this case, Apigee and Istio are part of such an platform, that helps developers with managing APIs, services and managing business policies for them]",
        "actions" : [
            {
                "text":"Call Web Team to test the new API",
                "next" : "call-web-team-test-new-api"
            },
            {
                "text" : "Publish the new implementation in Portal, notify other teams",
                "next" : "publish-newimplementation-notify-other-teams"
            }
        ]
    },
    "call-web-team-test-new-api" : {
        "image": "images/blank.png",
        "text": "Remember we had setup a portal earlier, do you want to still call them?",
        "actions" : [
            {
                "text": "Ok, got it, Go back",
                "next": "leverge-platoform-configure-biz-policies"
            }
        ]
    },
    "publish-newimplementation-notify-other-teams" : {
        "image" : "images/10.png",
        "text" : "That's how you do it, Self-service FTW, you publish to the portal, interested parties get notified [your UX teams hopefully are still interested :)], they pick up the new version and start embedding in their apps, Great Job!, Well done!",
        "actions" : [
            {
                "text" : "Lets give someone else a chance now ;)",
                "next" : "start"
            }
        ]
    }
}
