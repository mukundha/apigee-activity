var build_model ={
    "name" : "Build an App",
    "model" : {
      "start": {
          "image": "images/build_app/1.png",
          "text" : "Are you ready?",
          "actions" : [
              {
                  "text": "Accept Challenge",
                  "next": "challenge-accepted"
              }
          ]
      },
      "challenge-accepted" : {
          "image": "images/build_app/11.png",
          "text" : "How would you approach?",
          "actions" : [
              {
                  "text" : "Start by building an API Backend",
                  "next" : "start-with-apibackend"
              },
              {
                  "text" : "Start by building a web app",
                  "next": "are-you-sure-about-webapp"
              }
          ]
      },
      "start-with-apibackend" : {
          "image" : "images/build_app/2.png",
          "text" : "Web, mobile, and voice are different channels in which your users will interact with your store. Best practice is to build your functionality/features as an independent service (usually referred to as a backend application) with well defined remote interfaces (APIs). Good choice! What's next?",
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
          "image": "images/build_app/blank.png",
          "text": "While it's tempting to start coding, remember other applications (web, mobile, voice) are dependent on your work.  They are usually developed by different teams (there's a hint here), so it’s often a best practice to start with an OpenAPI specification to describe the application's interfaces and make sure this will help deliver the user experiences you want to deliver.",
          "actions": [
              {
                  "text": "Ok, got it. Go back",
                  "next": "start-with-apibackend"
              }
          ]
 
      },
      "are-you-sure-about-webapp": {
          "image": "images/build_app/blank.png",
          "text" : "Web, mobile, and voice are different channels in which your users will interact with your store. Best practice is to build your functionality/features as an independent service (usually referred to as a backend application) with well defined remote interfaces (APIs).",
          "actions": [
              {
                  "text": "Ok, got it. Go back",
                  "next": "challenge-accepted"
              }
          ]
      },
      "lets-define-api-spec" : {
          "image" : "images/build_app/3.png",
          "text" : "It's a good practice to start with a spec and make sure, it will help deliver the kind of user experience you want to deliver. Good choice!  What’s next?",
          "actions": [
              {
                  "text": "Let's setup a sandbox with Mock",
                  "next" : "lets-setup-a-sandbox-with-mock"
              },
              {
                  "text": "Let's implement the spec",
                  "next" : "lets-implement-the-spec"
              }
          ]
      },
      "lets-implement-the-spec": {
          "image": "images/build_app/blank.png",
          "text" : "Again, while it’s tempting to start coding and implement the spec, remember other teams (UX) might be waiting on you until your backend is ready. In the interest of speed and productivity of the overall team, it’s a best practice to setup a sandbox first, before you start coding.",
          "actions": [
              {
                  "text": "Ok, got it. Go back",
                  "next": "lets-define-api-spec"
              }
          ]
      },
      "lets-setup-a-sandbox-with-mock":{
          "image": "images/build_app/4.png",
          "text" : "Good Choice! Setting up a sandbox is quick and enables other teams (UX in this case) to start playing with it before the real backend is ready. More importantly, you might also get feedback on the APIs themselves, if its not enough to deliver the intended user experience. What's next?",
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
          "image" : "images/build_app/blank.png",
          "text" : "Remember the hint? While it's a good idea to test it out, usually channel experiences are built by dedicated teams.",
          "actions" : [
              {
                  "text": "Ok, got it. Go back.",
                  "next": "lets-setup-a-sandbox-with-mock"
              }
          ]
      },
      "assemble-teams-building-web-mobile-voice-apps" : {
          "image": "images/build_app/5.png",
          "text" : "While you might be thinking whether assembling the UX teams is the first step or whether it fits here, remember you need to have this sorted at least at this stage when you have the sandbox ready.  If you can do it earlier, it's even better and gives them an opportunity to collaborate on the API spec as well. So far so good. What's next?",
          "actions" : [
              {
                  "text": "Publish the APIs in a portal, enable Self-service access for other teams",
                  "next" : "publish-apis-portal-enable-self-service"
              },
              {
                  "text" : "Create a pdf API doc and send it to UX team",
                  "next" : "create-pdf-send-to-ux-teams"
              }
          ]
      },
      "create-pdf-send-to-ux-teams" : {
          "image" : "images/build_app/blank.png",
          "text" : "It's good to enable self-service collaboration between teams from the start.  Having manual processes to share docs, getting access or obtaining credentials slows down all the teams and is extremely inefficient.",
          "actions" : [
              {
                  "text": "Ok, got it. Go back.",
                  "next": "assemble-teams-building-web-mobile-voice-apps"
              }
          ]
      },
      "publish-apis-portal-enable-self-service" : {
          "image" : "images/build_app/6.png",
          "text" : "Good going. Self-service FTW!!!  Portal is the go-to place all your dependent teams (API Consumers) can discover new APIs, learn how to use them, get access and start building applications using them. Now how do you implement the backend?",
          "actions" : [
              {
                  "text" : "Let's start building in Java",
                  "next" : "lets-start-building-java"
              },
              {
                  "text" : "Let's break this down into Microservices",
                  "next" : "lets-break-down-microservices"
              }
          ]
      },
      "lets-start-building-java": {
          "image": "images/build_app/blank.png",
          "text": "You can choose any programming language of your choice, but make sure you spend time thinking about the application architecture, so that it helps you not only build faster, but is more manageable in the long term as your application functionality grows.",
          "actions" : [
              {
                  "text": "Ok, got it. Go back.",
                  "next": "publish-apis-portal-enable-self-service"
              }
          ]
      },
      "lets-break-down-microservices" : {
          "image" : "images/build_app/7.png",
          "text" : "There are several application architectures. Microservices is one of them and is gaining a lot of momentum among developers and even businesses for the benefits it brings.  If you are starting new, it might be better for you to design your applications in a microservices based architecture. Most of the times it’s helpful.",
          "actions" : [
              {
                  "text" : "Let’s separate business logic vs business policy",
                  "next" : "lets-separate-business-logic-business-policy"
              },
              {
                  "text" : "Got the requirements, let’s start coding.",
                  "next" : "got-the-requirements-lets-go-coding"
              }
          ]
      },
      "got-the-requirements-lets-go-coding": {
          "image": "images/build_app/blank.png",
          "text": "Before you code, let’s also make sure to understand what needs to be codified vs configured.  Have you identified the business logic vs business policy and how to implement them?",
          "actions" : [
              {
                  "text": "Ok, got it.  Go back.",
                  "next": "lets-break-down-microservices"
              }
          ]
      },
      "lets-separate-business-logic-business-policy" : {
          "image" : "images/build_app/8.png",
          "text" : "Carefully separate business logic vs business policy.  Code only your business logic.  Leverage platform capabilities (have you chosen your platform yet?) to apply business policies.",
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
          "image": "images/build_app/blank.png",
          "text": "If you are choosing the right platform to build applications, you don't need to actually code your business policies.  The platform usually provides you the option to configure them.",
          "actions" : [
              {
                  "text": "Ok, got it.  Go back.",
                  "next": "lets-separate-business-logic-business-policy"
              }
          ]
      },
      "leverge-platoform-configure-biz-policies" : {
          "image" : "images/build_app/9.png",
          "text" : "Modern applications are built on application development platforms that are cloud-native and provides tools for developers to build and manage their applications. They also provide the ability for developers to configure policies / rules for their applications ranging from security, traffic management, monitoring and analytics. [In this case, Apigee and Istio are part of such a platform, that helps developers with managing APIs, services and business policies.]",
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
          "image": "images/build_app/blank.png",
          "text": "Remember we had setup a portal earlier.  Do you want to still call them?",
          "actions" : [
              {
                  "text": "Ok, got it.  Go back.",
                  "next": "leverge-platoform-configure-biz-policies"
              }
          ]
      },
      "publish-newimplementation-notify-other-teams" : {
          "image" : "images/build_app/10.png",
          "text" : "That's how you do it! Self-service FTW. You publish to the portal, interested parties get notified [your UX teams hopefully are still interested :)].  They pick up the new version and start embedding in their apps. Great job! Well done!",
          "actions" : [
              {
                  "text" : "Let's give someone else a chance now ;)",
                  "next" : "finish"
              }
          ]
      }
    }
 }
 