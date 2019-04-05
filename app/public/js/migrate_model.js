var migrate_model = {
    "name": "Migrate an App",
    "model": {
      "start": {
          "image": "images/migrate_app/0.png",
          "text" : "Are you ready?",
          "actions" : [
              {
                  "text": "Accept Challenge",
                  "next": "challenge-accepted"
              }
          ]
      },
      "challenge-accepted" : {
          "image": "images/migrate_app/1.png",
          "text" : "How do you approach migrating this application?",
          "actions" : [
              {
                  "text" : "Start migrating the webapp",
                  "next": "start-migrating-webapp"
              },
              {
                  "text" : "Start migrating the microservices",
                  "next" : "start-migrating-microservices"
              }
          ]
      },
      "start-migrating-microservices" : {
          "image" : "images/migrate_app/blank.png",
          "text" : "While it’s a perfectly valid approach, usually it’s better to migrate simpler stateless workloads first to make sure you understand the migration path and the new environment. In this case, you have a simple webapp.  It might be an easier option to start migrating it first.",
          "actions" : [
              {
                  "text" : "Got it. Let’s go back.",
                  "next" : "challenge-accepted"
              }
          ]
      },
      "start-migrating-webapp": {
          "image" : "images/migrate_app/1a.png",
          "text" : "Good call. Looks like it’s an easier option to start first and learn first.  Let's deploy a version of the app in App Engine",
          "actions": [
              {
                  "text" : "Run functional and performance tests on the new instance",
                  "next" : "run-tests-web-app"
              }
          ]
      },
      "run-tests-web-app" : {
          "image" : "images/migrate_app/1b.png",
          "text" : "It is important to not only run the functional tests for your application, but also performance tests to make sure the new instance can handle production level traffic with acceptable latency.",
          "actions": [
              {
                  "text" : "Looks good, let’s cut-off production traffic",
                  "next" : "cut-off-web-traffic"
              }
          ]
      },
      "cut-off-web-traffic" : {
          "image" : "images/migrate_app/2.png",
          "text" : "Well done on migrating the web app. Now let's look at migrating the microservices.",
          "actions" : [
              {
                  "text": "Let's move microserivces to GKE",
                  "next": "lets-move-microservices-to-gke"
              },
              {
                  "text": "Let's create abstraction layer with an API Gateway",
                  "next": "abstract-with-an-api-gateway"
              }
          ]
      },
      "lets-move-microservices-to-gke" : {
          "image": "images/migrate_app/blank.png",
          "text" : "Given the dependencies, it's not as simple as a webapp migration. It’s a better practice to abstract the APIs with an API Gateway, so that you have control over when to migrate what and get visibility into the migration itself, which helps reduce the risk of migration in affecting existing applications.",
          "actions" : [
              {
                  "text" : "Ok, Got it, Let's go back",
                  "next" : "cut-off-web-traffic"
              }
          ]
      },
      "abstract-with-an-api-gateway" : {
          "image" : "images/migrate_app/5a.png",
          "text" : "Good call! Abstraction hides the complexity of a migration effort, helps maintain business continuity and reduces the risk of migration affecting existing users and dependencies. But make sure the new abstraction doesn't introduce complexities by testing it.  First just proxy your backend services. Here we have used Apigee, an API management platform, part of Google Cloud to abstract the services.",
          "actions" : [
              {
                  "text" : "Run functional and performance tests on the new instance",
                  "next" : "run-tests-api-gateway"
              }
          ]
      },
      "run-tests-api-gateway" : {
          "image" : "images/migrate_app/5b.png",
          "text" : "It is important to not only run the functional tests for your application, but also performance tests to make sure the new instance can handle production level traffic with acceptable latency.",
          "actions": [
              {
                  "text" : "Looks good.  Let’s cut-off production traffic.",
                  "next" : "cut-off-api-gateway-traffic"
              }
          ]
      },
      "cut-off-api-gateway-traffic" : {
          "image" : "images/migrate_app/5.png",
          "text" : "Well done abstracting the backend and routing traffic now through Apigee. The next step is to actually migrate the microservices.  What can we do now?",
          "actions" : [
              {
                  "text" : "Let’s move the containers to GKE with Istio",
                  "next" : "lets-move-containers-gke-istio"
              },
              {
                  "text": "Let’s move the containers to GCE",
                  "next": "lets-move-container-gce"
              }
          ]
      },
      "lets-move-container-gce" : {
          "image": "images/migrate_app/blank.png",
          "text": "Since you have packaged microservices into containers and run them on VMs, GCE seems like a no-brainer, but microservices management platforms (service-mesh) like Istio helps developers and operators develop and manage microservices based applications more easily.",
          "actions": [
              {
                  "text": "Ok got it. Let’s go back.",
                  "next": "cut-off-api-gateway-traffic"
              }
          ]
      },
      "lets-move-containers-gke-istio" : {
          "image": "images/migrate_app/6.png",
          "text": "GKE+Istio helps manage your microservices based applications.  First, setup a new instance of your microservices deployment in GKE+Istio. Apigee integrates well with Istio, making it easier to manage those APIs as well. Your production traffic is still going to your old services, but we are now setup with all the tools to make the cut-off.",
          "actions": [
              {
                  "text" : "All good, let's go to Production",
                  "next" : "all-good-lets-go-prod"
              },
              {
                  "text": "Let's do canary testing and slowly rollout this new environment",
                  "next": "lets-do-canary"
              }
          ]
      },
      "all-good-lets-go-prod" : {
          "image" : "images/migrate_app/blank.png",
          "text" : "We have seen the functional and performance testing during migration earlier. Even with testing, you may not know if the new instance can handle production-like workload. Canary releases help manage this risk.",
          "actions" : [
              {
                  "text" : "Got it. Let's go back.",
                  "next": "lets-move-containers-gke-istio"
              }
          ]
      },
      "lets-do-canary" : {
          "image": "images/migrate_app/8.png",
          "text" : "Canary releases helps you understand if the new environment can handle production-like workload and provides an option to rollback if necessary. Apigee can help you manage canary releases to new application backends (while Istio itself helps you do canary releases for newer versions of the microservices).",
          "actions": [
              {
                  "text" : "All good, Cut off to Production",
                  "next" : "cut-off-to-production"
              }
          ]
      },
      "cut-off-to-production": {
          "image": "images/migrate_app/10.png",
          "text" : "Once you have confidence in the new instance, you can increase the percentage of traffic sent to the newer instance until it reaches 100%. Well done!  You have migrated your application without affecting existing users.",
          "actions": [
              {
                  "text" : "Let's go Home",
                  "next" : "finish"
              },
              {
                  "text": "Wait, I want to expand to more regions",
                  "next" : "wait-expand-to-more-regions"
              }
          ]
      },
      "wait-expand-to-more-regions" : {
          "image": "images/migrate_app/11.png",
          "text" : "Glad you asked.  The architecture still remains the same.  You can easily add as many regions as needed by your business, spin up a new GKE cluster in another region and let Apigee handle traffic routing to regions nearest to your users / consumers.",
          "actions": [
              {
                  "text" : "Cool! Let's go Home.",
                  "next" : "finish"
              }
          ]
      }
    }
  }
  