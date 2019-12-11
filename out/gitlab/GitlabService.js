
  const axios = require("axios");
  const errorHelper = require("../../../helpers/ErrorHelper");
  const nconf = require("nconf");
  const qs = require("querystring");

  class GitlabService {
    get name() {
      return "GITLAB";
    }

    get description() {
      return;
    }

    get icon() {
      return "gitlab.svg";
    }

    get category() {
      return;
    }

    get apiEndpoint() {
      return;
    }

    get authMethod() {
      return;
    }

    get authEndpoint() {
      return;
    }

    get apiTokenURL() {
      return;
    }

    get scopes() {
      return;
    }

    get requiredAuthParams() {
      return;
    }

    get primaryAction() {
      return;
    }

    get webhooks() {
      return;
    }

    get webhooksToTaskMap() {
      return;
    }

    get entities() {
      return;
    }

    async connect(authParams) {
      //TODO: Add custom connect functionality here
    }

    async syncIntegrationEntities(options) {
      //TODO: Add custom syncIntegrationEntities functionality here
    }

  async get(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async post(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async put(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async delete(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async patch(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async unknownHTTPMethod(entity, options) {
        switch (entity) {
            
        case "GET_V3_VERSION":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3Version(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_DOCKERFILES":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3Dockerfiles(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_DOCKERFILES_NAME":
        // Function parameters for this API name
        return new Promise((resolve, reject) => {
          this.getV3DockerfilesName(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_USER_EMAILS_EMAIL_ID":
        // Function parameters for this API emailId
        return new Promise((resolve, reject) => {
          this.deleteV3UserEmailsEmailId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_USER_KEYS_KEY_ID":
        // Function parameters for this API keyId
        return new Promise((resolve, reject) => {
          this.deleteV3UserKeysKeyId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_USER":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3User(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_USER_EMAILS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3UserEmails(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_USER_EMAILS_EMAIL_ID":
        // Function parameters for this API emailId
        return new Promise((resolve, reject) => {
          this.getV3UserEmailsEmailId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_USER_KEYS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3UserKeys(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_USER_KEYS_KEY_ID":
        // Function parameters for this API keyId
        return new Promise((resolve, reject) => {
          this.getV3UserKeysKeyId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_USER_EMAILS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3UserEmails(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_USER_KEYS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3UserKeys(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_TEMPLATES_DOCKERFILES":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3TemplatesDockerfiles(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_TEMPLATES_DOCKERFILES_NAME":
        // Function parameters for this API name
        return new Promise((resolve, reject) => {
          this.getV3TemplatesDockerfilesName(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_TEMPLATES_GITIGNORES":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3TemplatesGitignores(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_TEMPLATES_GITIGNORES_NAME":
        // Function parameters for this API name
        return new Promise((resolve, reject) => {
          this.getV3TemplatesGitignoresName(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_TEMPLATES_GITLAB_CI_YMLS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3TemplatesGitlabCiYmls(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_TEMPLATES_GITLAB_CI_YMLS_NAME":
        // Function parameters for this API name
        return new Promise((resolve, reject) => {
          this.getV3TemplatesGitlabCiYmlsName(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_TEMPLATES_LICENSES":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3TemplatesLicenses(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_TEMPLATES_LICENSES_NAME":
        // Function parameters for this API name
        return new Promise((resolve, reject) => {
          this.getV3TemplatesLicensesName(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_USERS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.deleteV3UsersId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_USERS_ID_EMAILS_EMAIL_ID":
        // Function parameters for this API id,emailId
        return new Promise((resolve, reject) => {
          this.deleteV3UsersIdEmailsEmailId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_USERS_ID_KEYS_KEY_ID":
        // Function parameters for this API id,keyId
        return new Promise((resolve, reject) => {
          this.deleteV3UsersIdKeysKeyId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_USERS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3Users(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_USERS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3UsersId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_USERS_ID_EMAILS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3UsersIdEmails(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_USERS_ID_EVENTS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3UsersIdEvents(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_USERS_ID_KEYS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3UsersIdKeys(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_USERS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3Users(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_USERS_ID_EMAILS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3UsersIdEmails(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_USERS_ID_KEYS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3UsersIdKeys(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_USERS_ID":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.putV3UsersId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_USERS_ID_BLOCK":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.putV3UsersIdBlock(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_USERS_ID_UNBLOCK":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.putV3UsersIdUnblock(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_TODOS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.deleteV3Todos(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_TODOS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.deleteV3TodosId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_TODOS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3Todos(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_NAMESPACES":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3Namespaces(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_SESSION":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3Session(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_RUNNERS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.deleteV3RunnersId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_RUNNERS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3Runners(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_RUNNERS_ALL":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3RunnersAll(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_RUNNERS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3RunnersId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_RUNNERS_ID":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.putV3RunnersId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_ISSUES":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3Issues(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_KEYS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3KeysId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_APPLICATION_SETTINGS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3ApplicationSettings(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_APPLICATION_SETTINGS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ApplicationSettings(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_LICENSES":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3Licenses(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_LICENSES_NAME":
        // Function parameters for this API name
        return new Promise((resolve, reject) => {
          this.getV3LicensesName(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GITIGNORES":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3Gitignores(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GITIGNORES_NAME":
        // Function parameters for this API name
        return new Promise((resolve, reject) => {
          this.getV3GitignoresName(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_SNIPPETS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.deleteV3SnippetsId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_SNIPPETS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3Snippets(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_SNIPPETS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3SnippetsId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_SNIPPETS_ID_RAW":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3SnippetsIdRaw(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_SNIPPETS_PUBLIC":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3SnippetsPublic(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_SNIPPETS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3Snippets(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_SNIPPETS_ID":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.putV3SnippetsId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_CI_LINT":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3CiLint(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GITLAB_CI_YMLS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3GitlabCiYmls(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GITLAB_CI_YMLS_NAME":
        // Function parameters for this API name
        return new Promise((resolve, reject) => {
          this.getV3GitlabCiYmlsName(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_SIDEKIQ_COMPOUND_METRICS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3SidekiqCompoundMetrics(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_SIDEKIQ_JOB_STATS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3SidekiqJobStats(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_SIDEKIQ_PROCESS_METRICS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3SidekiqProcessMetrics(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_SIDEKIQ_QUEUE_METRICS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3SidekiqQueueMetrics(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_GROUPS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.deleteV3GroupsId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_GROUPS_ID_ACCESS_REQUESTS_USER_ID":
        // Function parameters for this API id,userId
        return new Promise((resolve, reject) => {
          this.deleteV3GroupsIdAccessRequestsUserId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_GROUPS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId
        return new Promise((resolve, reject) => {
          this.deleteV3GroupsIdMembersUserId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GROUPS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3Groups(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GROUPS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3GroupsId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GROUPS_ID_ACCESS_REQUESTS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3GroupsIdAccessRequests(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GROUPS_ID_ISSUES":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3GroupsIdIssues(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GROUPS_ID_MEMBERS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3GroupsIdMembers(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GROUPS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId
        return new Promise((resolve, reject) => {
          this.getV3GroupsIdMembersUserId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GROUPS_ID_NOTIFICATION_SETTINGS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3GroupsIdNotificationSettings(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GROUPS_ID_PROJECTS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3GroupsIdProjects(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_GROUPS_OWNED":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3GroupsOwned(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_GROUPS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3Groups(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_GROUPS_ID_ACCESS_REQUESTS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.postV3GroupsIdAccessRequests(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_GROUPS_ID_MEMBERS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3GroupsIdMembers(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_GROUPS_ID_PROJECTS_PROJECT_ID":
        // Function parameters for this API id,projectId
        return new Promise((resolve, reject) => {
          this.postV3GroupsIdProjectsProjectId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_GROUPS_ID":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.putV3GroupsId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_GROUPS_ID_ACCESS_REQUESTS_USER_ID_APPROVE":
        // Function parameters for this API id,userId,opts
        return new Promise((resolve, reject) => {
          this.putV3GroupsIdAccessRequestsUserIdApprove(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_GROUPS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3GroupsIdMembersUserId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_GROUPS_ID_NOTIFICATION_SETTINGS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.putV3GroupsIdNotificationSettings(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_DEPLOY_KEYS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3DeployKeys(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_ACCESS_REQUESTS_USER_ID":
        // Function parameters for this API id,userId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdAccessRequestsUserId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_BOARDS_BOARD_ID_LISTS_LIST_ID":
        // Function parameters for this API id,boardId,listId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdBoardsBoardIdListsListId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_DEPLOY_KEYS_KEY_ID":
        // Function parameters for this API id,keyId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdDeployKeysKeyId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_DEPLOY_KEYS_KEY_ID_DISABLE":
        // Function parameters for this API id,keyId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdDeployKeysKeyIdDisable(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_ENVIRONMENTS_ENVIRONMENT_ID":
        // Function parameters for this API id,environmentId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdEnvironmentsEnvironmentId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_FORK":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdFork(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_HOOKS_HOOK_ID":
        // Function parameters for this API id,hookId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdHooksHookId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_ISSUES_ISSUE_ID":
        // Function parameters for this API id,issueId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdIssuesIssueId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_ISSUES_ISSUE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,issueId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_ISSUES_ISSUE_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,issueId,noteId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_ISSUES_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdIssuesNoteableIdNotesNoteId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_ISSUES_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdIssuesSubscribableIdSubscription(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_KEYS_KEY_ID":
        // Function parameters for this API id,keyId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdKeysKeyId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_KEYS_KEY_ID_DISABLE":
        // Function parameters for this API id,keyId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdKeysKeyIdDisable(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_LABELS":
        // Function parameters for this API id,name
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdLabels(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_LABELS_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdLabelsSubscribableIdSubscription(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdMembersUserId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUEST_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdMergeRequestSubscribableIdSubscription(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdMergeRequestsMergeRequestId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,mergeRequestId,noteId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUESTS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUESTS_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_REPOSITORY_BRANCHES_BRANCH":
        // Function parameters for this API id,branch
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdRepositoryBranchesBranch(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_REPOSITORY_FILES":
        // Function parameters for this API id,filePath,branchName,commitMessage,opts
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdRepositoryFiles(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_REPOSITORY_MERGED_BRANCHES":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdRepositoryMergedBranches(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_REPOSITORY_TAGS_TAG_NAME":
        // Function parameters for this API id,tagName
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdRepositoryTagsTagName(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_RUNNERS_RUNNER_ID":
        // Function parameters for this API id,runnerId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdRunnersRunnerId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_SERVICES_SERVICE_SLUG":
        // Function parameters for this API serviceSlug,id
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdServicesServiceSlug(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_SHARE_GROUP_ID":
        // Function parameters for this API id,groupId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdShareGroupId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_SNIPPETS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID":
        // Function parameters for this API id,snippetId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdSnippetsSnippetId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,snippetId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,snippetId,noteId
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_STAR":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdStar(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_TRIGGERS_TOKEN":
        // Function parameters for this API id,token
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdTriggersToken(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_PROJECTS_ID_VARIABLES_KEY":
        // Function parameters for this API id,key
        return new Promise((resolve, reject) => {
          this.deleteV3ProjectsIdVariablesKey(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3Projects(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ALL":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsAll(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3ProjectsId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ACCESS_REQUESTS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdAccessRequests(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_BOARDS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdBoards(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_BOARDS_BOARD_ID_LISTS":
        // Function parameters for this API id,boardId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdBoardsBoardIdLists(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_BOARDS_BOARD_ID_LISTS_LIST_ID":
        // Function parameters for this API id,boardId,listId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdBoardsBoardIdListsListId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_BUILDS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdBuilds(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_BUILDS_ARTIFACTS_REF_NAME_DOWNLOAD":
        // Function parameters for this API id,refName,job
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdBuildsArtifactsRefNameDownload(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_BUILDS_BUILD_ID":
        // Function parameters for this API id,buildId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdBuildsBuildId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_BUILDS_BUILD_ID_ARTIFACTS":
        // Function parameters for this API id,buildId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdBuildsBuildIdArtifacts(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_BUILDS_BUILD_ID_TRACE":
        // Function parameters for this API id,buildId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdBuildsBuildIdTrace(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_DEPLOY_KEYS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdDeployKeys(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_DEPLOY_KEYS_KEY_ID":
        // Function parameters for this API id,keyId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdDeployKeysKeyId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_DEPLOYMENTS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdDeployments(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_DEPLOYMENTS_DEPLOYMENT_ID":
        // Function parameters for this API id,deploymentId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdDeploymentsDeploymentId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ENVIRONMENTS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdEnvironments(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_EVENTS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdEvents(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_HOOKS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdHooks(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_HOOKS_HOOK_ID":
        // Function parameters for this API id,hookId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdHooksHookId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ISSUES":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdIssues(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID":
        // Function parameters for this API id,issueId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdIssuesIssueId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID_AWARD_EMOJI":
        // Function parameters for this API id,issueId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdIssuesIssueIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,issueId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,issueId,noteId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,issueId,noteId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID_TIME_STATS":
        // Function parameters for this API id,issueId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdIssuesIssueIdTimeStats(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ISSUES_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdIssuesNoteableIdNotes(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_ISSUES_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteId,noteableId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdIssuesNoteableIdNotesNoteId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_KEYS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdKeys(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_KEYS_KEY_ID":
        // Function parameters for this API id,keyId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdKeysKeyId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_LABELS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdLabels(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MEMBERS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMembers(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMembersUserId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestMergeRequestId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_CHANGES":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestMergeRequestIdChanges(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_CLOSES_ISSUES":
        // Function parameters for this API id,mergeRequestId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_COMMENTS":
        // Function parameters for this API id,mergeRequestId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestMergeRequestIdComments(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_COMMITS":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestMergeRequestIdCommits(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequests(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_AWARD_EMOJI":
        // Function parameters for this API id,mergeRequestId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_CHANGES":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdChanges(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_CLOSES_ISSUES":
        // Function parameters for this API id,mergeRequestId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_COMMENTS":
        // Function parameters for this API id,mergeRequestId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdComments(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_COMMITS":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdCommits(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,mergeRequestId,noteId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,mergeRequestId,noteId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_TIME_STATS":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_VERSIONS":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdVersions(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_VERSIONS_VERSION_ID":
        // Function parameters for this API id,mergeRequestId,versionId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsNoteableIdNotes(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteId,noteableId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MILESTONES":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMilestones(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MILESTONES_MILESTONE_ID":
        // Function parameters for this API id,milestoneId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMilestonesMilestoneId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_MILESTONES_MILESTONE_ID_ISSUES":
        // Function parameters for this API id,milestoneId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdMilestonesMilestoneIdIssues(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_NOTIFICATION_SETTINGS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdNotificationSettings(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_PIPELINES":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdPipelines(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_PIPELINES_PIPELINE_ID":
        // Function parameters for this API id,pipelineId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdPipelinesPipelineId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_ARCHIVE":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryArchive(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_BLOBS_SHA":
        // Function parameters for this API id,sha,filepath
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryBlobsSha(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_BRANCHES":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryBranches(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_BRANCHES_BRANCH":
        // Function parameters for this API id,branch
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryBranchesBranch(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryCommits(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA":
        // Function parameters for this API id,sha
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryCommitsSha(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_BLOB":
        // Function parameters for this API id,sha,filepath
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryCommitsShaBlob(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_BUILDS":
        // Function parameters for this API id,sha,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryCommitsShaBuilds(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_COMMENTS":
        // Function parameters for this API id,sha,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryCommitsShaComments(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_DIFF":
        // Function parameters for this API id,sha
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryCommitsShaDiff(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_STATUSES":
        // Function parameters for this API id,sha,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryCommitsShaStatuses(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMPARE":
        // Function parameters for this API id,from,to
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryCompare(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_CONTRIBUTORS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryContributors(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_FILES":
        // Function parameters for this API id,filePath,ref
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryFiles(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_RAW_BLOBS_SHA":
        // Function parameters for this API id,sha
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryRawBlobsSha(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_TAGS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryTags(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_TAGS_TAG_NAME":
        // Function parameters for this API id,tagName
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryTagsTagName(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_TREE":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRepositoryTree(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_RUNNERS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdRunners(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_SERVICES_SERVICE_SLUG":
        // Function parameters for this API serviceSlug,id
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdServicesServiceSlug(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_SNIPPETS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdSnippets(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdSnippetsNoteableIdNotes(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteId,noteableId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdSnippetsNoteableIdNotesNoteId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID":
        // Function parameters for this API id,snippetId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdSnippetsSnippetId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_AWARD_EMOJI":
        // Function parameters for this API id,snippetId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdSnippetsSnippetIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,snippetId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,snippetId,noteId,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,snippetId,noteId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_RAW":
        // Function parameters for this API id,snippetId
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdSnippetsSnippetIdRaw(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_TRIGGERS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdTriggers(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_TRIGGERS_TOKEN":
        // Function parameters for this API id,token
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdTriggersToken(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_USERS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdUsers(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_VARIABLES":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdVariables(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_ID_VARIABLES_KEY":
        // Function parameters for this API id,key
        return new Promise((resolve, reject) => {
          this.getV3ProjectsIdVariablesKey(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_OWNED":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsOwned(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_SEARCH_QUERY":
        // Function parameters for this API query,opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsSearchQuery(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_STARRED":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsStarred(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_PROJECTS_VISIBLE":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.getV3ProjectsVisible(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3Projects(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_FORK_ID":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.postV3ProjectsForkId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ACCESS_REQUESTS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdAccessRequests(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ARCHIVE":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdArchive(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_BOARDS_BOARD_ID_LISTS":
        // Function parameters for this API id,boardId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdBoardsBoardIdLists(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_BUILDS_BUILD_ID_ARTIFACTS_KEEP":
        // Function parameters for this API id,buildId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdBuildsBuildIdArtifactsKeep(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_BUILDS_BUILD_ID_CANCEL":
        // Function parameters for this API id,buildId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdBuildsBuildIdCancel(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_BUILDS_BUILD_ID_ERASE":
        // Function parameters for this API id,buildId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdBuildsBuildIdErase(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_BUILDS_BUILD_ID_PLAY":
        // Function parameters for this API id,buildId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdBuildsBuildIdPlay(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_BUILDS_BUILD_ID_RETRY":
        // Function parameters for this API id,buildId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdBuildsBuildIdRetry(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_DEPLOY_KEYS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdDeployKeys(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_DEPLOY_KEYS_KEY_ID_ENABLE":
        // Function parameters for this API id,keyId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdDeployKeysKeyIdEnable(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ENVIRONMENTS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdEnvironments(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_FORK_FORKED_FROM_ID":
        // Function parameters for this API id,forkedFromId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdForkForkedFromId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_HOOKS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdHooks(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssues(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_ADD_SPENT_TIME":
        // Function parameters for this API id,issueId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssuesIssueIdAddSpentTime(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_AWARD_EMOJI":
        // Function parameters for this API id,issueId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssuesIssueIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_MOVE":
        // Function parameters for this API id,issueId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssuesIssueIdMove(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,issueId,noteId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_RESET_SPENT_TIME":
        // Function parameters for this API id,issueId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssuesIssueIdResetSpentTime(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_RESET_TIME_ESTIMATE":
        // Function parameters for this API id,issueId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssuesIssueIdResetTimeEstimate(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_TIME_ESTIMATE":
        // Function parameters for this API id,issueId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssuesIssueIdTimeEstimate(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_TODO":
        // Function parameters for this API id,issueId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssuesIssueIdTodo(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssuesNoteableIdNotes(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_ISSUES_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdIssuesSubscribableIdSubscription(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_KEYS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdKeys(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_KEYS_KEY_ID_ENABLE":
        // Function parameters for this API id,keyId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdKeysKeyIdEnable(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_LABELS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdLabels(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_LABELS_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdLabelsSubscribableIdSubscription(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MEMBERS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMembers(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_CANCEL_MERGE_WHEN_BUILD_SUCCEEDS":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_COMMENTS":
        // Function parameters for this API id,mergeRequestId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestMergeRequestIdComments(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUEST_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestSubscribableIdSubscription(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequests(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_ADD_SPENT_TIME":
        // Function parameters for this API id,mergeRequestId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_AWARD_EMOJI":
        // Function parameters for this API id,mergeRequestId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_CANCEL_MERGE_WHEN_BUILD_SUCCEEDS":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_COMMENTS":
        // Function parameters for this API id,mergeRequestId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsMergeRequestIdComments(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,mergeRequestId,noteId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_RESET_SPENT_TIME":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_RESET_TIME_ESTIMATE":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_TIME_ESTIMATE":
        // Function parameters for this API id,mergeRequestId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_TODO":
        // Function parameters for this API id,mergeRequestId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsMergeRequestIdTodo(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsNoteableIdNotes(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMergeRequestsSubscribableIdSubscription(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_MILESTONES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdMilestones(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_PIPELINE":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdPipeline(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_PIPELINES_PIPELINE_ID_CANCEL":
        // Function parameters for this API id,pipelineId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdPipelinesPipelineIdCancel(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_PIPELINES_PIPELINE_ID_RETRY":
        // Function parameters for this API id,pipelineId
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdPipelinesPipelineIdRetry(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_REF_REFTRIGGER_BUILDS":
        // Function parameters for this API id,ref,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdRefReftriggerBuilds(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_BRANCHES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdRepositoryBranches(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_COMMITS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdRepositoryCommits(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_CHERRY_PICK":
        // Function parameters for this API id,sha,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdRepositoryCommitsShaCherryPick(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_COMMENTS":
        // Function parameters for this API id,sha,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdRepositoryCommitsShaComments(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_FILES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdRepositoryFiles(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_TAGS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdRepositoryTags(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_TAGS_TAG_NAME_RELEASE":
        // Function parameters for this API id,tagName,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdRepositoryTagsTagNameRelease(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_RUNNERS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdRunners(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_SERVICES_MATTERMOST_SLASH_COMMANDS_TRIGGER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdServicesMattermostSlashCommandsTrigger(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_SERVICES_SLACK_SLASH_COMMANDS_TRIGGER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdServicesSlackSlashCommandsTrigger(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_SHARE":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdShare(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_SNIPPETS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdSnippets(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_SNIPPETS_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdSnippetsNoteableIdNotes(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_AWARD_EMOJI":
        // Function parameters for this API id,snippetId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdSnippetsSnippetIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,snippetId,noteId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_STAR":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdStar(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_STATUSES_SHA":
        // Function parameters for this API id,sha,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdStatusesSha(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_TRIGGERS":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdTriggers(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_UNARCHIVE":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdUnarchive(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_UPLOADS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdUploads(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_ID_VARIABLES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsIdVariables(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_PROJECTS_USER_USER_ID":
        // Function parameters for this API userId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3ProjectsUserUserId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_ACCESS_REQUESTS_USER_ID_APPROVE":
        // Function parameters for this API id,userId,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdAccessRequestsUserIdApprove(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_BOARDS_BOARD_ID_LISTS_LIST_ID":
        // Function parameters for this API id,boardId,listId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdBoardsBoardIdListsListId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_ENVIRONMENTS_ENVIRONMENT_ID":
        // Function parameters for this API id,environmentId,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdEnvironmentsEnvironmentId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_HOOKS_HOOK_ID":
        // Function parameters for this API id,hookId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdHooksHookId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_ISSUES_ISSUE_ID":
        // Function parameters for this API id,issueId,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdIssuesIssueId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_ISSUES_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdIssuesNoteableIdNotesNoteId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_LABELS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdLabels(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdMembersUserId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID":
        // Function parameters for this API id,mergeRequestId,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdMergeRequestMergeRequestId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_MERGE":
        // Function parameters for this API id,mergeRequestId,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdMergeRequestMergeRequestIdMerge(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID":
        // Function parameters for this API id,mergeRequestId,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdMergeRequestsMergeRequestId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_MERGE":
        // Function parameters for this API id,mergeRequestId,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdMergeRequestsMergeRequestIdMerge(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_MERGE_REQUESTS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_MILESTONES_MILESTONE_ID":
        // Function parameters for this API id,milestoneId,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdMilestonesMilestoneId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_NOTIFICATION_SETTINGS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdNotificationSettings(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_REPOSITORY_BRANCHES_BRANCH_PROTECT":
        // Function parameters for this API id,branch,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdRepositoryBranchesBranchProtect(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_REPOSITORY_BRANCHES_BRANCH_UNPROTECT":
        // Function parameters for this API id,branch
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdRepositoryBranchesBranchUnprotect(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_REPOSITORY_FILES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdRepositoryFiles(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_REPOSITORY_TAGS_TAG_NAME_RELEASE":
        // Function parameters for this API id,tagName,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdRepositoryTagsTagNameRelease(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_ASANA":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesAsana(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_ASSEMBLA":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesAssembla(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_BAMBOO":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesBamboo(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_BUGZILLA":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesBugzilla(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_BUILDKITE":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesBuildkite(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_BUILDS_EMAIL":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesBuildsEmail(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_CAMPFIRE":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesCampfire(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_CUSTOM_ISSUE_TRACKER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesCustomIssueTracker(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_DRONE_CI":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesDroneCi(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_EMAILS_ON_PUSH":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesEmailsOnPush(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_EXTERNAL_WIKI":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesExternalWiki(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_FLOWDOCK":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesFlowdock(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_GEMNASIUM":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesGemnasium(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_HIPCHAT":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesHipchat(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_IRKER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesIrker(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_JIRA":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesJira(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_KUBERNETES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesKubernetes(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_MATTERMOST":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesMattermost(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_MATTERMOST_SLASH_COMMANDS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesMattermostSlashCommands(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_PIPELINES_EMAIL":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesPipelinesEmail(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_PIVOTALTRACKER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesPivotaltracker(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_PUSHOVER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesPushover(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_REDMINE":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesRedmine(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_SLACK":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesSlack(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_SLACK_SLASH_COMMANDS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesSlackSlashCommands(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SERVICES_TEAMCITY":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdServicesTeamcity(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SNIPPETS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId,UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdSnippetsNoteableIdNotesNoteId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID":
        // Function parameters for this API id,snippetId,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdSnippetsSnippetId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_PROJECTS_ID_VARIABLES_KEY":
        // Function parameters for this API id,key,opts
        return new Promise((resolve, reject) => {
          this.putV3ProjectsIdVariablesKey(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_NOTIFICATION_SETTINGS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3NotificationSettings(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "PUT_V3_NOTIFICATION_SETTINGS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.putV3NotificationSettings(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_INTERNAL_BROADCAST_MESSAGE":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3InternalBroadcastMessage(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_INTERNAL_CHECK":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3InternalCheck(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_INTERNAL_DISCOVER":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3InternalDiscover(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_INTERNAL_MERGE_REQUEST_URLS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3InternalMergeRequestUrls(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_INTERNAL_ALLOWED":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.postV3InternalAllowed(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_INTERNAL_LFS_AUTHENTICATE":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.postV3InternalLfsAuthenticate(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_INTERNAL_TWO_FACTOR_RECOVERY_CODES":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.postV3InternalTwoFactorRecoveryCodes(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "DELETE_V3_HOOKS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.deleteV3HooksId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_HOOKS":
        // Function parameters for this API 
        return new Promise((resolve, reject) => {
          this.getV3Hooks(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "GET_V3_HOOKS_ID":
        // Function parameters for this API id
        return new Promise((resolve, reject) => {
          this.getV3HooksId(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
        case "POST_V3_HOOKS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return new Promise((resolve, reject) => {
          this.postV3Hooks(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for getV3Version
        getV3Version(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.VersionApi();
apiInstance.getV3Version((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3Dockerfiles
        getV3Dockerfiles(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.DockerfilesApi();
apiInstance.getV3Dockerfiles((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3DockerfilesName
        getV3DockerfilesName(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.DockerfilesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3DockerfilesName(incomingOptions.name, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3UserEmailsEmailId
        deleteV3UserEmailsEmailId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let emailId = 56;*/ // Number | The ID of the email
apiInstance.deleteV3UserEmailsEmailId(incomingOptions.emailId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3UserKeysKeyId
        deleteV3UserKeysKeyId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let keyId = 56;*/ // Number | The ID of the SSH key
apiInstance.deleteV3UserKeysKeyId(incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3User
        getV3User(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi();
apiInstance.getV3User((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3UserEmails
        getV3UserEmails(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi();
apiInstance.getV3UserEmails((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3UserEmailsEmailId
        getV3UserEmailsEmailId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let emailId = 56;*/ // Number | The ID of the email
apiInstance.getV3UserEmailsEmailId(incomingOptions.emailId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3UserKeys
        getV3UserKeys(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi();
apiInstance.getV3UserKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3UserKeysKeyId
        getV3UserKeysKeyId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let keyId = 56;*/ // Number | The ID of the SSH key
apiInstance.getV3UserKeysKeyId(incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3UserEmails
        postV3UserEmails(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3UserEmails(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3UserKeys
        postV3UserKeys(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3UserKeys(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3TemplatesDockerfiles
        getV3TemplatesDockerfiles(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi();
apiInstance.getV3TemplatesDockerfiles((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3TemplatesDockerfilesName
        getV3TemplatesDockerfilesName(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3TemplatesDockerfilesName(incomingOptions.name, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3TemplatesGitignores
        getV3TemplatesGitignores(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi();
apiInstance.getV3TemplatesGitignores((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3TemplatesGitignoresName
        getV3TemplatesGitignoresName(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3TemplatesGitignoresName(incomingOptions.name, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3TemplatesGitlabCiYmls
        getV3TemplatesGitlabCiYmls(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi();
apiInstance.getV3TemplatesGitlabCiYmls((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3TemplatesGitlabCiYmlsName
        getV3TemplatesGitlabCiYmlsName(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3TemplatesGitlabCiYmlsName(incomingOptions.name, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3TemplatesLicenses
        getV3TemplatesLicenses(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi()
/*let opts = {
  'popular': true // Boolean | If passed, returns only popular licenses
};*/
apiInstance.getV3TemplatesLicenses(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3TemplatesLicensesName
        getV3TemplatesLicensesName(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3TemplatesLicensesName(incomingOptions.name, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3UsersId
        deleteV3UsersId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.deleteV3UsersId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3UsersIdEmailsEmailId
        deleteV3UsersIdEmailsEmailId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let emailId = 56;*/ // Number | The ID of the email
apiInstance.deleteV3UsersIdEmailsEmailId(incomingOptions.id, incomingOptions.emailId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3UsersIdKeysKeyId
        deleteV3UsersIdKeysKeyId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let keyId = 56;*/ // Number | The ID of the SSH key
apiInstance.deleteV3UsersIdKeysKeyId(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3Users
        getV3Users(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let opts = {
  'username': "username_example", // String | Get a single user with a specific username
  'search': "search_example", // String | Search for a username
  'active': true, // Boolean | Filters only active users
  'external': true, // Boolean | Filters only external users
  'blocked': true, // Boolean | Filters only blocked users
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Users(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3UsersId
        getV3UsersId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.getV3UsersId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3UsersIdEmails
        getV3UsersIdEmails(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.getV3UsersIdEmails(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3UsersIdEvents
        getV3UsersIdEvents(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3UsersIdEvents(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3UsersIdKeys
        getV3UsersIdKeys(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.getV3UsersIdKeys(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3Users
        postV3Users(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Users(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3UsersIdEmails
        postV3UsersIdEmails(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3UsersIdEmails(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3UsersIdKeys
        postV3UsersIdKeys(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3UsersIdKeys(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3UsersId
        putV3UsersId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3UsersId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3UsersIdBlock
        putV3UsersIdBlock(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.putV3UsersIdBlock(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3UsersIdUnblock
        putV3UsersIdUnblock(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.putV3UsersIdUnblock(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3Todos
        deleteV3Todos(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TodosApi();
apiInstance.deleteV3Todos((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for deleteV3TodosId
        deleteV3TodosId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TodosApi()
/*let id = 56;*/ // Number | The ID of the todo being marked as done
apiInstance.deleteV3TodosId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3Todos
        getV3Todos(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TodosApi()
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Todos(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3Namespaces
        getV3Namespaces(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.NamespacesApi()
/*let opts = {
  'search': "search_example", // String | Search query for namespaces
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Namespaces(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3Session
        postV3Session(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SessionApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Session(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3RunnersId
        deleteV3RunnersId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi()
/*let id = 56;*/ // Number | The ID of the runner
apiInstance.deleteV3RunnersId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3Runners
        getV3Runners(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi()
/*let opts = {
  'scope': "scope_example", // String | The scope of specific runners to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Runners(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3RunnersAll
        getV3RunnersAll(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi()
/*let opts = {
  'scope': "scope_example", // String | The scope of specific runners to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3RunnersAll(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3RunnersId
        getV3RunnersId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi()
/*let id = 56;*/ // Number | The ID of the runner
apiInstance.getV3RunnersId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3RunnersId
        putV3RunnersId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi()
/*let id = 56;*/ // Number | The ID of the runne
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3RunnersId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3Issues
        getV3Issues(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.IssuesApi()
/*let opts = {
  'state': "'all'", // String | Return opened, closed, or all issues
  'labels': "labels_example", // String | Comma-separated list of label names
  'milestone': "milestone_example", // String | Return issues for a specific milestone
  'orderBy': "'created_at'", // String | Return issues ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return issues sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Issues(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3KeysId
        getV3KeysId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.KeysApi()
/*let id = 56;*/ // Number | 
apiInstance.getV3KeysId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ApplicationSettings
        getV3ApplicationSettings(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ApplicationApi();
apiInstance.getV3ApplicationSettings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for putV3ApplicationSettings
        putV3ApplicationSettings(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ApplicationApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ApplicationSettings(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3Licenses
        getV3Licenses(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.LicensesApi()
/*let opts = {
  'popular': true // Boolean | If passed, returns only popular licenses
};*/
apiInstance.getV3Licenses(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3LicensesName
        getV3LicensesName(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.LicensesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3LicensesName(incomingOptions.name, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3Gitignores
        getV3Gitignores(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GitignoresApi();
apiInstance.getV3Gitignores((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3GitignoresName
        getV3GitignoresName(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GitignoresApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3GitignoresName(incomingOptions.name, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3SnippetsId
        deleteV3SnippetsId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let id = 56;*/ // Number | The ID of a snippet
apiInstance.deleteV3SnippetsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3Snippets
        getV3Snippets(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Snippets(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3SnippetsId
        getV3SnippetsId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let id = 56;*/ // Number | The ID of a snippet
apiInstance.getV3SnippetsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3SnippetsIdRaw
        getV3SnippetsIdRaw(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let id = 56;*/ // Number | The ID of a snippet
apiInstance.getV3SnippetsIdRaw(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3SnippetsPublic
        getV3SnippetsPublic(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3SnippetsPublic(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3Snippets
        postV3Snippets(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Snippets(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3SnippetsId
        putV3SnippetsId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let id = 56;*/ // Number | The ID of a snippe
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3SnippetsId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3CiLint
        postV3CiLint(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.CiApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3CiLint(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3GitlabCiYmls
        getV3GitlabCiYmls(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GitlabCiYmlsApi();
apiInstance.getV3GitlabCiYmls((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3GitlabCiYmlsName
        getV3GitlabCiYmlsName(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GitlabCiYmlsApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3GitlabCiYmlsName(incomingOptions.name, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3SidekiqCompoundMetrics
        getV3SidekiqCompoundMetrics(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SidekiqApi();
apiInstance.getV3SidekiqCompoundMetrics((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3SidekiqJobStats
        getV3SidekiqJobStats(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SidekiqApi();
apiInstance.getV3SidekiqJobStats((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3SidekiqProcessMetrics
        getV3SidekiqProcessMetrics(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SidekiqApi();
apiInstance.getV3SidekiqProcessMetrics((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3SidekiqQueueMetrics
        getV3SidekiqQueueMetrics(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SidekiqApi();
apiInstance.getV3SidekiqQueueMetrics((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for deleteV3GroupsId
        deleteV3GroupsId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a group
apiInstance.deleteV3GroupsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3GroupsIdAccessRequestsUserId
        deleteV3GroupsIdAccessRequestsUserId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let userId = 56;*/ // Number | The user ID of the access requester
apiInstance.deleteV3GroupsIdAccessRequestsUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3GroupsIdMembersUserId
        deleteV3GroupsIdMembersUserId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let userId = 56;*/ // Number | The user ID of the member
apiInstance.deleteV3GroupsIdMembersUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3Groups
        getV3Groups(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let opts = {
  'statistics': true, // Boolean | Include project statistics
  'allAvailable': true, // Boolean | Show all group that you have access to
  'search': "search_example", // String | Search for a specific group
  'orderBy': "'name'", // String | Order by name or path
  'sort': "'asc'", // String | Sort by asc (ascending) or desc (descending)
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'skipGroups': 56 // [Number] | Array of group ids to exclude from list
};*/
apiInstance.getV3Groups(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3GroupsId
        getV3GroupsId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a group
apiInstance.getV3GroupsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3GroupsIdAccessRequests
        getV3GroupsIdAccessRequests(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3GroupsIdAccessRequests(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3GroupsIdIssues
        getV3GroupsIdIssues(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a grou
/*let opts = {
  'state': "'opened'", // String | Return opened, closed, or all issues
  'labels': "labels_example", // String | Comma-separated list of label names
  'milestone': "milestone_example", // String | Return issues for a specific milestone
  'orderBy': "'created_at'", // String | Return issues ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return issues sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3GroupsIdIssues(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3GroupsIdMembers
        getV3GroupsIdMembers(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let opts = {
  'query': "query_example", // String | A query string to search for members
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3GroupsIdMembers(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3GroupsIdMembersUserId
        getV3GroupsIdMembersUserId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let userId = 56;*/ // Number | The user ID of the member
apiInstance.getV3GroupsIdMembersUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3GroupsIdNotificationSettings
        getV3GroupsIdNotificationSettings(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group ID or project ID or project NAMESPACE/PROJECT_NAME
apiInstance.getV3GroupsIdNotificationSettings(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3GroupsIdProjects
        getV3GroupsIdProjects(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a grou
/*let opts = {
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'simple': true, // Boolean | Return only the ID, URL, name, and path of each project
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3GroupsIdProjects(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3GroupsOwned
        getV3GroupsOwned(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'statistics': true // Boolean | Include project statistics
};*/
apiInstance.getV3GroupsOwned(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3Groups
        postV3Groups(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Groups(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3GroupsIdAccessRequests
        postV3GroupsIdAccessRequests(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group ID
apiInstance.postV3GroupsIdAccessRequests(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3GroupsIdMembers
        postV3GroupsIdMembers(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3GroupsIdMembers(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3GroupsIdProjectsProjectId
        postV3GroupsIdProjectsProjectId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a grou
/*let projectId = "projectId_example";*/ // String | The ID or path of the project
apiInstance.postV3GroupsIdProjectsProjectId(incomingOptions.id, incomingOptions.projectId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3GroupsId
        putV3GroupsId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a grou
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3GroupsId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3GroupsIdAccessRequestsUserIdApprove
        putV3GroupsIdAccessRequestsUserIdApprove(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let userId = 56;*/ // Number | The user ID of the access requeste
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3GroupsIdAccessRequestsUserIdApprove(incomingOptions.id, incomingOptions.userId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3GroupsIdMembersUserId
        putV3GroupsIdMembersUserId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let userId = 56;*/ // Number | The user ID of the new membe
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3GroupsIdMembersUserId(incomingOptions.id, incomingOptions.userId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3GroupsIdNotificationSettings
        putV3GroupsIdNotificationSettings(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group ID or project ID or project NAMESPACE/PROJECT_NAM
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3GroupsIdNotificationSettings(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3DeployKeys
        getV3DeployKeys(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.DeployKeysApi();
apiInstance.getV3DeployKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for deleteV3ProjectsId
        deleteV3ProjectsId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.deleteV3ProjectsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdAccessRequestsUserId
        deleteV3ProjectsIdAccessRequestsUserId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let userId = 56;*/ // Number | The user ID of the access requester
apiInstance.deleteV3ProjectsIdAccessRequestsUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdBoardsBoardIdListsListId
        deleteV3ProjectsIdBoardsBoardIdListsListId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let boardId = 56;*/ // Number | The ID of a boar
/*let listId = 56;*/ // Number | The ID of a board list
apiInstance.deleteV3ProjectsIdBoardsBoardIdListsListId(incomingOptions.id, incomingOptions.boardId, incomingOptions.listId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdDeployKeysKeyId
        deleteV3ProjectsIdDeployKeysKeyId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdDeployKeysKeyId(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdDeployKeysKeyIdDisable
        deleteV3ProjectsIdDeployKeysKeyIdDisable(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdDeployKeysKeyIdDisable(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdEnvironmentsEnvironmentId
        deleteV3ProjectsIdEnvironmentsEnvironmentId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let environmentId = 56;*/ // Number | The environment ID
apiInstance.deleteV3ProjectsIdEnvironmentsEnvironmentId(incomingOptions.id, incomingOptions.environmentId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdFork
        deleteV3ProjectsIdFork(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.deleteV3ProjectsIdFork(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdHooksHookId
        deleteV3ProjectsIdHooksHookId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let hookId = 56;*/ // Number | The ID of the hook to delete
apiInstance.deleteV3ProjectsIdHooksHookId(incomingOptions.id, incomingOptions.hookId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdIssuesIssueId
        deleteV3ProjectsIdIssuesIssueId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issue
apiInstance.deleteV3ProjectsIdIssuesIssueId(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId
        deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId
        deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.issueId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdIssuesNoteableIdNotesNoteId
        deleteV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a note
apiInstance.deleteV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdIssuesSubscribableIdSubscription
        deleteV3ProjectsIdIssuesSubscribableIdSubscription(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.deleteV3ProjectsIdIssuesSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdKeysKeyId
        deleteV3ProjectsIdKeysKeyId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdKeysKeyId(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdKeysKeyIdDisable
        deleteV3ProjectsIdKeysKeyIdDisable(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdKeysKeyIdDisable(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdLabels
        deleteV3ProjectsIdLabels(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let name = "name_example";*/ // String | The name of the label to be deleted
apiInstance.deleteV3ProjectsIdLabels(incomingOptions.id, incomingOptions.name, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdLabelsSubscribableIdSubscription
        deleteV3ProjectsIdLabelsSubscribableIdSubscription(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.deleteV3ProjectsIdLabelsSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMembersUserId
        deleteV3ProjectsIdMembersUserId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let userId = 56;*/ // Number | The user ID of the member
apiInstance.deleteV3ProjectsIdMembersUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestSubscribableIdSubscription
        deleteV3ProjectsIdMergeRequestSubscribableIdSubscription(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.deleteV3ProjectsIdMergeRequestSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestsMergeRequestId
        deleteV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a merge request
apiInstance.deleteV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId
        deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId
        deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
        deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a note
apiInstance.deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription
        deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdRepositoryBranchesBranch
        deleteV3ProjectsIdRepositoryBranchesBranch(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let branch = "branch_example";*/ // String | The name of the branch
apiInstance.deleteV3ProjectsIdRepositoryBranchesBranch(incomingOptions.id, incomingOptions.branch, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdRepositoryFiles
        deleteV3ProjectsIdRepositoryFiles(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let filePath = "filePath_example";*/ // String | The path to new file. Ex. lib/class.r
/*let branchName = "branchName_example";*/ // String | The name of branc
/*let commitMessage = "commitMessage_example";*/ // String | Commit Messag
/*let opts = {
  'authorEmail': "authorEmail_example", // String | The email of the author
  'authorName': "authorName_example" // String | The name of the author
};*/
apiInstance.deleteV3ProjectsIdRepositoryFiles(incomingOptions.id, incomingOptions.filePath, incomingOptions.branchName, incomingOptions.commitMessage, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdRepositoryMergedBranches
        deleteV3ProjectsIdRepositoryMergedBranches(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.deleteV3ProjectsIdRepositoryMergedBranches(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdRepositoryTagsTagName
        deleteV3ProjectsIdRepositoryTagsTagName(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let tagName = "tagName_example";*/ // String | The name of the tag
apiInstance.deleteV3ProjectsIdRepositoryTagsTagName(incomingOptions.id, incomingOptions.tagName, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdRunnersRunnerId
        deleteV3ProjectsIdRunnersRunnerId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let runnerId = 56;*/ // Number | The ID of the runner
apiInstance.deleteV3ProjectsIdRunnersRunnerId(incomingOptions.id, incomingOptions.runnerId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdServicesServiceSlug
        deleteV3ProjectsIdServicesServiceSlug(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let serviceSlug = "serviceSlug_example";*/ // String | The name of the servic
/*let id = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdServicesServiceSlug(incomingOptions.serviceSlug, incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdShareGroupId
        deleteV3ProjectsIdShareGroupId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let groupId = 56;*/ // Number | The ID of the group
apiInstance.deleteV3ProjectsIdShareGroupId(incomingOptions.id, incomingOptions.groupId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId
        deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a note
apiInstance.deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdSnippetsSnippetId
        deleteV3ProjectsIdSnippetsSnippetId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let snippetId = 56;*/ // Number | The ID of a project snippet
apiInstance.deleteV3ProjectsIdSnippetsSnippetId(incomingOptions.id, incomingOptions.snippetId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId
        deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.snippetId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId
        deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.snippetId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdStar
        deleteV3ProjectsIdStar(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.deleteV3ProjectsIdStar(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdTriggersToken
        deleteV3ProjectsIdTriggersToken(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let token = "token_example";*/ // String | The unique token of trigger
apiInstance.deleteV3ProjectsIdTriggersToken(incomingOptions.id, incomingOptions.token, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdVariablesKey
        deleteV3ProjectsIdVariablesKey(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let key = "key_example";*/ // String | The key of the variable
apiInstance.deleteV3ProjectsIdVariablesKey(incomingOptions.id, incomingOptions.key, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3Projects
        getV3Projects(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true // Boolean | Return only the ID, URL, name, and path of each project
};*/
apiInstance.getV3Projects(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsAll
        getV3ProjectsAll(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true, // Boolean | Return only the ID, URL, name, and path of each project
  'statistics': true // Boolean | Include project statistics
};*/
apiInstance.getV3ProjectsAll(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsId
        getV3ProjectsId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdAccessRequests
        getV3ProjectsIdAccessRequests(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdAccessRequests(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdBoards
        getV3ProjectsIdBoards(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsIdBoards(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdBoardsBoardIdLists
        getV3ProjectsIdBoardsBoardIdLists(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let boardId = 56;*/ // Number | The ID of a board
apiInstance.getV3ProjectsIdBoardsBoardIdLists(incomingOptions.id, incomingOptions.boardId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdBoardsBoardIdListsListId
        getV3ProjectsIdBoardsBoardIdListsListId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let boardId = 56;*/ // Number | The ID of a boar
/*let listId = 56;*/ // Number | The ID of a list
apiInstance.getV3ProjectsIdBoardsBoardIdListsListId(incomingOptions.id, incomingOptions.boardId, incomingOptions.listId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdBuilds
        getV3ProjectsIdBuilds(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'scope': "scope_example", // String | The scope of builds to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdBuilds(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdBuildsArtifactsRefNameDownload
        getV3ProjectsIdBuildsArtifactsRefNameDownload(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let refName = "refName_example";*/ // String | The ref from repositor
/*let job = "job_example";*/ // String | The name for the build
apiInstance.getV3ProjectsIdBuildsArtifactsRefNameDownload(incomingOptions.id, incomingOptions.refName, incomingOptions.job, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdBuildsBuildId
        getV3ProjectsIdBuildsBuildId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.getV3ProjectsIdBuildsBuildId(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdBuildsBuildIdArtifacts
        getV3ProjectsIdBuildsBuildIdArtifacts(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.getV3ProjectsIdBuildsBuildIdArtifacts(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdBuildsBuildIdTrace
        getV3ProjectsIdBuildsBuildIdTrace(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.getV3ProjectsIdBuildsBuildIdTrace(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdDeployKeys
        getV3ProjectsIdDeployKeys(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the project
apiInstance.getV3ProjectsIdDeployKeys(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdDeployKeysKeyId
        getV3ProjectsIdDeployKeysKeyId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.getV3ProjectsIdDeployKeysKeyId(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdDeployments
        getV3ProjectsIdDeployments(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdDeployments(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdDeploymentsDeploymentId
        getV3ProjectsIdDeploymentsDeploymentId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let deploymentId = 56;*/ // Number | The deployment ID
apiInstance.getV3ProjectsIdDeploymentsDeploymentId(incomingOptions.id, incomingOptions.deploymentId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdEnvironments
        getV3ProjectsIdEnvironments(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdEnvironments(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdEvents
        getV3ProjectsIdEvents(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdEvents(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdHooks
        getV3ProjectsIdHooks(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdHooks(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdHooksHookId
        getV3ProjectsIdHooksHookId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let hookId = 56;*/ // Number | The ID of a project hook
apiInstance.getV3ProjectsIdHooksHookId(incomingOptions.id, incomingOptions.hookId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssues
        getV3ProjectsIdIssues(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'state': "'all'", // String | Return opened, closed, or all issues
  'iid': 56, // Number | Return the issue having the given `iid`
  'labels': "labels_example", // String | Comma-separated list of label names
  'milestone': "milestone_example", // String | Return issues for a specific milestone
  'orderBy': "'created_at'", // String | Return issues ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return issues sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdIssues(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueId
        getV3ProjectsIdIssuesIssueId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issue
apiInstance.getV3ProjectsIdIssuesIssueId(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueIdAwardEmoji
        getV3ProjectsIdIssuesIssueIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of an Issue, Merge Request or Snippe
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdIssuesIssueIdAwardEmoji(incomingOptions.id, incomingOptions.issueId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId
        getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji
        getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.issueId, incomingOptions.noteId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId
        getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.issueId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueIdTimeStats
        getV3ProjectsIdIssuesIssueIdTimeStats(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issue
apiInstance.getV3ProjectsIdIssuesIssueIdTimeStats(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesNoteableIdNotes
        getV3ProjectsIdIssuesNoteableIdNotes(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdIssuesNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesNoteableIdNotesNoteId
        getV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteId = 56;*/ // Number | The ID of a not
/*let noteableId = 56;*/ // Number | The ID of the noteable
apiInstance.getV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteId, incomingOptions.noteableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdKeys
        getV3ProjectsIdKeys(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the project
apiInstance.getV3ProjectsIdKeys(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdKeysKeyId
        getV3ProjectsIdKeysKeyId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.getV3ProjectsIdKeysKeyId(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdLabels
        getV3ProjectsIdLabels(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsIdLabels(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMembers
        getV3ProjectsIdMembers(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let opts = {
  'query': "query_example", // String | A query string to search for members
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMembers(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMembersUserId
        getV3ProjectsIdMembersUserId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let userId = 56;*/ // Number | The user ID of the member
apiInstance.getV3ProjectsIdMembersUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestMergeRequestId
        getV3ProjectsIdMergeRequestMergeRequestId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a merge request
apiInstance.getV3ProjectsIdMergeRequestMergeRequestId(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestMergeRequestIdChanges
        getV3ProjectsIdMergeRequestMergeRequestIdChanges(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdChanges(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues
        getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestMergeRequestIdComments
        getV3ProjectsIdMergeRequestMergeRequestIdComments(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdComments(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestMergeRequestIdCommits
        getV3ProjectsIdMergeRequestMergeRequestIdCommits(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdCommits(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequests
        getV3ProjectsIdMergeRequests(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'state': "'all'", // String | Return opened, closed, merged, or all merge requests
  'orderBy': "'created_at'", // String | Return merge requests ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return merge requests sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'iid': 56 // [Number] | The IID of the merge requests
};*/
apiInstance.getV3ProjectsIdMergeRequests(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestId
        getV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji
        getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of an Issue, Merge Request or Snippe
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId
        getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdChanges
        getV3ProjectsIdMergeRequestsMergeRequestIdChanges(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdChanges(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues
        getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdComments
        getV3ProjectsIdMergeRequestsMergeRequestIdComments(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdComments(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdCommits
        getV3ProjectsIdMergeRequestsMergeRequestIdCommits(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdCommits(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji
        getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.noteId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId
        getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats
        getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a project merge_request
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdVersions
        getV3ProjectsIdMergeRequestsMergeRequestIdVersions(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a merge request
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdVersions(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId
        getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a merge reques
/*let versionId = 56;*/ // Number | The ID of a merge request diff version
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.versionId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsNoteableIdNotes
        getV3ProjectsIdMergeRequestsNoteableIdNotes(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestsNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
        getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteId = 56;*/ // Number | The ID of a not
/*let noteableId = 56;*/ // Number | The ID of the noteable
apiInstance.getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteId, incomingOptions.noteableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMilestones
        getV3ProjectsIdMilestones(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'state': "'all'", // String | Return \"active\", \"closed\", or \"all\" milestones
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'iid': 56 // [Number] | The IID of the milestone
};*/
apiInstance.getV3ProjectsIdMilestones(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMilestonesMilestoneId
        getV3ProjectsIdMilestonesMilestoneId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let milestoneId = 56;*/ // Number | The ID of a project milestone
apiInstance.getV3ProjectsIdMilestonesMilestoneId(incomingOptions.id, incomingOptions.milestoneId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdMilestonesMilestoneIdIssues
        getV3ProjectsIdMilestonesMilestoneIdIssues(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let milestoneId = 56;*/ // Number | The ID of a project mileston
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMilestonesMilestoneIdIssues(incomingOptions.id, incomingOptions.milestoneId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdNotificationSettings
        getV3ProjectsIdNotificationSettings(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The group ID or project ID or project NAMESPACE/PROJECT_NAME
apiInstance.getV3ProjectsIdNotificationSettings(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdPipelines
        getV3ProjectsIdPipelines(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'scope': "scope_example" // String | Either running, branches, or tags
};*/
apiInstance.getV3ProjectsIdPipelines(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdPipelinesPipelineId
        getV3ProjectsIdPipelinesPipelineId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let pipelineId = 56;*/ // Number | The pipeline ID
apiInstance.getV3ProjectsIdPipelinesPipelineId(incomingOptions.id, incomingOptions.pipelineId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryArchive
        getV3ProjectsIdRepositoryArchive(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'sha': "sha_example", // String | The commit sha of the archive to be downloaded
  'format': "format_example" // String | The archive format
};*/
apiInstance.getV3ProjectsIdRepositoryArchive(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryBlobsSha
        getV3ProjectsIdRepositoryBlobsSha(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit, branch name, or tag nam
/*let filepath = "filepath_example";*/ // String | The path to the file to display
apiInstance.getV3ProjectsIdRepositoryBlobsSha(incomingOptions.id, incomingOptions.sha, incomingOptions.filepath, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryBranches
        getV3ProjectsIdRepositoryBranches(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsIdRepositoryBranches(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryBranchesBranch
        getV3ProjectsIdRepositoryBranchesBranch(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let branch = "branch_example";*/ // String | The name of the branch
apiInstance.getV3ProjectsIdRepositoryBranchesBranch(incomingOptions.id, incomingOptions.branch, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommits
        getV3ProjectsIdRepositoryCommits(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'refName': "refName_example", // String | The name of a repository branch or tag, if not given the default branch is used
  'since': "since_example", // String | Only commits after or in this date will be returned
  'until': "until_example", // String | Only commits before or in this date will be returned
  'page': 0, // Number | The page for pagination
  'perPage': 20, // Number | The number of results per page
  'path': "path_example" // String | The file path
};*/
apiInstance.getV3ProjectsIdRepositoryCommits(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsSha
        getV3ProjectsIdRepositoryCommitsSha(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | A commit sha, or the name of a branch or tag
apiInstance.getV3ProjectsIdRepositoryCommitsSha(incomingOptions.id, incomingOptions.sha, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsShaBlob
        getV3ProjectsIdRepositoryCommitsShaBlob(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit, branch name, or tag nam
/*let filepath = "filepath_example";*/ // String | The path to the file to display
apiInstance.getV3ProjectsIdRepositoryCommitsShaBlob(incomingOptions.id, incomingOptions.sha, incomingOptions.filepath, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsShaBuilds
        getV3ProjectsIdRepositoryCommitsShaBuilds(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The SHA id of a commi
/*let opts = {
  'scope': "scope_example", // String | The scope of builds to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdRepositoryCommitsShaBuilds(incomingOptions.id, incomingOptions.sha, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsShaComments
        getV3ProjectsIdRepositoryCommitsShaComments(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | A commit sha, or the name of a branch or ta
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdRepositoryCommitsShaComments(incomingOptions.id, incomingOptions.sha, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsShaDiff
        getV3ProjectsIdRepositoryCommitsShaDiff(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | A commit sha, or the name of a branch or tag
apiInstance.getV3ProjectsIdRepositoryCommitsShaDiff(incomingOptions.id, incomingOptions.sha, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsShaStatuses
        getV3ProjectsIdRepositoryCommitsShaStatuses(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit has
/*let opts = {
  'ref': "ref_example", // String | The ref
  'stage': "stage_example", // String | The stage
  'name': "name_example", // String | The name
  'all': "all_example", // String | Show all statuses, default: false
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdRepositoryCommitsShaStatuses(incomingOptions.id, incomingOptions.sha, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCompare
        getV3ProjectsIdRepositoryCompare(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let from = "from_example";*/ // String | The commit, branch name, or tag name to start compariso
/*let to = "to_example";*/ // String | The commit, branch name, or tag name to stop comparison
apiInstance.getV3ProjectsIdReposiincomingOptions.toryCompare(incomingOptions.id, incomingOptions.from, to, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryContributors
        getV3ProjectsIdRepositoryContributors(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsIdRepositoryContributors(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryFiles
        getV3ProjectsIdRepositoryFiles(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let filePath = "filePath_example";*/ // String | The path to the file. Ex. lib/class.r
/*let ref = "ref_example";*/ // String | The name of branch, tag, or commit
apiInstance.getV3ProjectsIdRepositoryFiles(incomingOptions.id, incomingOptions.filePath, incomingOptions.ref, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryRawBlobsSha
        getV3ProjectsIdRepositoryRawBlobsSha(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit, branch name, or tag name
apiInstance.getV3ProjectsIdRepositoryRawBlobsSha(incomingOptions.id, incomingOptions.sha, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryTags
        getV3ProjectsIdRepositoryTags(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsIdRepositoryTags(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryTagsTagName
        getV3ProjectsIdRepositoryTagsTagName(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let tagName = "tagName_example";*/ // String | The name of the tag
apiInstance.getV3ProjectsIdRepositoryTagsTagName(incomingOptions.id, incomingOptions.tagName, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryTree
        getV3ProjectsIdRepositoryTree(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'refName': "refName_example", // String | The name of a repository branch or tag, if not given the default branch is used
  'path': "path_example", // String | The path of the tree
  'recursive': true // Boolean | Used to get a recursive tree
};*/
apiInstance.getV3ProjectsIdRepositoryTree(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdRunners
        getV3ProjectsIdRunners(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'scope': "scope_example", // String | The scope of specific runners to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdRunners(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdServicesServiceSlug
        getV3ProjectsIdServicesServiceSlug(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let serviceSlug = "serviceSlug_example";*/ // String | The name of the servic
/*let id = 56;*/ // Number | 
apiInstance.getV3ProjectsIdServicesServiceSlug(incomingOptions.serviceSlug, incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippets
        getV3ProjectsIdSnippets(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdSnippets(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsNoteableIdNotes
        getV3ProjectsIdSnippetsNoteableIdNotes(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdSnippetsNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsNoteableIdNotesNoteId
        getV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteId = 56;*/ // Number | The ID of a not
/*let noteableId = 56;*/ // Number | The ID of the noteable
apiInstance.getV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteId, incomingOptions.noteableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetId
        getV3ProjectsIdSnippetsSnippetId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let snippetId = 56;*/ // Number | The ID of a project snippet
apiInstance.getV3ProjectsIdSnippetsSnippetId(incomingOptions.id, incomingOptions.snippetId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetIdAwardEmoji
        getV3ProjectsIdSnippetsSnippetIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let snippetId = 56;*/ // Number | The ID of an Issue, Merge Request or Snippe
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdSnippetsSnippetIdAwardEmoji(incomingOptions.id, incomingOptions.snippetId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId
        getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.snippetId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji
        getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.snippetId, incomingOptions.noteId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId
        getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.snippetId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetIdRaw
        getV3ProjectsIdSnippetsSnippetIdRaw(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let snippetId = 56;*/ // Number | The ID of a project snippet
apiInstance.getV3ProjectsIdSnippetsSnippetIdRaw(incomingOptions.id, incomingOptions.snippetId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for getV3ProjectsIdTriggers
        getV3ProjectsIdTriggers(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdTriggers(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdTriggersToken
        getV3ProjectsIdTriggersToken(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let token = "token_example";*/ // String | The unique token of trigger
apiInstance.getV3ProjectsIdTriggersToken(incomingOptions.id, incomingOptions.token, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdUsers
        getV3ProjectsIdUsers(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'search': "search_example", // String | Return list of users matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdUsers(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdVariables
        getV3ProjectsIdVariables(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdVariables(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsIdVariablesKey
        getV3ProjectsIdVariablesKey(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let key = "key_example";*/ // String | The key of the variable
apiInstance.getV3ProjectsIdVariablesKey(incomingOptions.id, incomingOptions.key, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsOwned
        getV3ProjectsOwned(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true, // Boolean | Return only the ID, URL, name, and path of each project
  'statistics': true // Boolean | Include project statistics
};*/
apiInstance.getV3ProjectsOwned(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsSearchQuery
        getV3ProjectsSearchQuery(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let query = "query_example";*/ // String | The project name to be searche
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsSearchQuery(incomingOptions.query, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsStarred
        getV3ProjectsStarred(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true // Boolean | Return only the ID, URL, name, and path of each project
};*/
apiInstance.getV3ProjectsStarred(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3ProjectsVisible
        getV3ProjectsVisible(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true // Boolean | Return only the ID, URL, name, and path of each project
};*/
apiInstance.getV3ProjectsVisible(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3Projects
        postV3Projects(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Projects(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsForkId
        postV3ProjectsForkId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.postV3ProjectsForkId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdAccessRequests
        postV3ProjectsIdAccessRequests(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project ID
apiInstance.postV3ProjectsIdAccessRequests(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdArchive
        postV3ProjectsIdArchive(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.postV3ProjectsIdArchive(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdBoardsBoardIdLists
        postV3ProjectsIdBoardsBoardIdLists(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let boardId = 56;*/ // Number | The ID of a boar
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdBoardsBoardIdLists(incomingOptions.id, incomingOptions.boardId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdBuildsBuildIdArtifactsKeep
        postV3ProjectsIdBuildsBuildIdArtifactsKeep(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdArtifactsKeep(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdBuildsBuildIdCancel
        postV3ProjectsIdBuildsBuildIdCancel(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdCancel(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdBuildsBuildIdErase
        postV3ProjectsIdBuildsBuildIdErase(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdErase(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdBuildsBuildIdPlay
        postV3ProjectsIdBuildsBuildIdPlay(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a Build
apiInstance.postV3ProjectsIdBuildsBuildIdPlay(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdBuildsBuildIdRetry
        postV3ProjectsIdBuildsBuildIdRetry(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdRetry(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdDeployKeys
        postV3ProjectsIdDeployKeys(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdDeployKeys(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdDeployKeysKeyIdEnable
        postV3ProjectsIdDeployKeysKeyIdEnable(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.postV3ProjectsIdDeployKeysKeyIdEnable(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdEnvironments
        postV3ProjectsIdEnvironments(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdEnvironments(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdForkForkedFromId
        postV3ProjectsIdForkForkedFromId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let forkedFromId = "forkedFromId_example";*/ // String | The ID of the project it was forked from
apiInstance.postV3ProjectsIdForkForkedFromId(incomingOptions.id, incomingOptions.forkedFromId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdHooks
        postV3ProjectsIdHooks(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdHooks(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssues
        postV3ProjectsIdIssues(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssues(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdAddSpentTime
        postV3ProjectsIdIssuesIssueIdAddSpentTime(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issu
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdAddSpentTime(incomingOptions.id, incomingOptions.issueId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdAwardEmoji
        postV3ProjectsIdIssuesIssueIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdAwardEmoji(incomingOptions.id, incomingOptions.issueId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdMove
        postV3ProjectsIdIssuesIssueIdMove(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issu
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdMove(incomingOptions.id, incomingOptions.issueId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji
        postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.issueId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdResetSpentTime
        postV3ProjectsIdIssuesIssueIdResetSpentTime(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issue
apiInstance.postV3ProjectsIdIssuesIssueIdResetSpentTime(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdResetTimeEstimate
        postV3ProjectsIdIssuesIssueIdResetTimeEstimate(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issue
apiInstance.postV3ProjectsIdIssuesIssueIdResetTimeEstimate(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdTimeEstimate
        postV3ProjectsIdIssuesIssueIdTimeEstimate(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issu
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdTimeEstimate(incomingOptions.id, incomingOptions.issueId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdTodo
        postV3ProjectsIdIssuesIssueIdTodo(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of an issuable
apiInstance.postV3ProjectsIdIssuesIssueIdTodo(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesNoteableIdNotes
        postV3ProjectsIdIssuesNoteableIdNotes(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesSubscribableIdSubscription
        postV3ProjectsIdIssuesSubscribableIdSubscription(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.postV3ProjectsIdIssuesSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdKeys
        postV3ProjectsIdKeys(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdKeys(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdKeysKeyIdEnable
        postV3ProjectsIdKeysKeyIdEnable(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.postV3ProjectsIdKeysKeyIdEnable(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdLabels
        postV3ProjectsIdLabels(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdLabels(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdLabelsSubscribableIdSubscription
        postV3ProjectsIdLabelsSubscribableIdSubscription(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.postV3ProjectsIdLabelsSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMembers
        postV3ProjectsIdMembers(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMembers(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds
        postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestMergeRequestIdComments
        postV3ProjectsIdMergeRequestMergeRequestIdComments(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestMergeRequestIdComments(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestSubscribableIdSubscription
        postV3ProjectsIdMergeRequestSubscribableIdSubscription(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.postV3ProjectsIdMergeRequestSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequests
        postV3ProjectsIdMergeRequests(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequests(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime
        postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a project merge_reques
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji
        postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds
        postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdComments
        postV3ProjectsIdMergeRequestsMergeRequestIdComments(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdComments(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji
        postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime
        postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a project merge_request
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate
        postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a project merge_request
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate
        postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a project merge_reques
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdTodo
        postV3ProjectsIdMergeRequestsMergeRequestIdTodo(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of an issuable
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdTodo(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsNoteableIdNotes
        postV3ProjectsIdMergeRequestsNoteableIdNotes(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsSubscribableIdSubscription
        postV3ProjectsIdMergeRequestsSubscribableIdSubscription(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.postV3ProjectsIdMergeRequestsSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdMilestones
        postV3ProjectsIdMilestones(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMilestones(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdPipeline
        postV3ProjectsIdPipeline(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdPipeline(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdPipelinesPipelineIdCancel
        postV3ProjectsIdPipelinesPipelineIdCancel(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let pipelineId = 56;*/ // Number | The pipeline ID
apiInstance.postV3ProjectsIdPipelinesPipelineIdCancel(incomingOptions.id, incomingOptions.pipelineId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdPipelinesPipelineIdRetry
        postV3ProjectsIdPipelinesPipelineIdRetry(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let pipelineId = 56;*/ // Number | The pipeline ID
apiInstance.postV3ProjectsIdPipelinesPipelineIdRetry(incomingOptions.id, incomingOptions.pipelineId, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdRefReftriggerBuilds
        postV3ProjectsIdRefReftriggerBuilds(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let ref = "ref_example";*/ // String | The commit sha or name of a branch or ta
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRefReftriggerBuilds(incomingOptions.id, incomingOptions.ref, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryBranches
        postV3ProjectsIdRepositoryBranches(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryBranches(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryCommits
        postV3ProjectsIdRepositoryCommits(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryCommits(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryCommitsShaCherryPick
        postV3ProjectsIdRepositoryCommitsShaCherryPick(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | A commit sha to be cherry picke
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryCommitsShaCherryPick(incomingOptions.id, incomingOptions.sha, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryCommitsShaComments
        postV3ProjectsIdRepositoryCommitsShaComments(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit's SH
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryCommitsShaComments(incomingOptions.id, incomingOptions.sha, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryFiles
        postV3ProjectsIdRepositoryFiles(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryFiles(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryTags
        postV3ProjectsIdRepositoryTags(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryTags(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryTagsTagNameRelease
        postV3ProjectsIdRepositoryTagsTagNameRelease(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let tagName = "tagName_example";*/ // String | The name of the ta
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryTagsTagNameRelease(incomingOptions.id, incomingOptions.tagName, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdRunners
        postV3ProjectsIdRunners(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRunners(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdServicesMattermostSlashCommandsTrigger
        postV3ProjectsIdServicesMattermostSlashCommandsTrigger(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdServicesMattermostSlashCommandsTrigger(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdServicesSlackSlashCommandsTrigger
        postV3ProjectsIdServicesSlackSlashCommandsTrigger(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdServicesSlackSlashCommandsTrigger(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdShare
        postV3ProjectsIdShare(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdShare(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdSnippets
        postV3ProjectsIdSnippets(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippets(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdSnippetsNoteableIdNotes
        postV3ProjectsIdSnippetsNoteableIdNotes(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippetsNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdSnippetsSnippetIdAwardEmoji
        postV3ProjectsIdSnippetsSnippetIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippetsSnippetIdAwardEmoji(incomingOptions.id, incomingOptions.snippetId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji
        postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.snippetId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdStar
        postV3ProjectsIdStar(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.postV3ProjectsIdStar(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdStatusesSha
        postV3ProjectsIdStatusesSha(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit has
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdStatusesSha(incomingOptions.id, incomingOptions.sha, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdTriggers
        postV3ProjectsIdTriggers(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.postV3ProjectsIdTriggers(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdUnarchive
        postV3ProjectsIdUnarchive(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.postV3ProjectsIdUnarchive(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsIdUploads
        postV3ProjectsIdUploads(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdUploads(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for postV3ProjectsIdVariables
        postV3ProjectsIdVariables(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdVariables(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3ProjectsUserUserId
        postV3ProjectsUserUserId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let userId = 56;*/ // Number | The ID of a use
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsUserUserId(incomingOptions.userId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsId
        putV3ProjectsId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdAccessRequestsUserIdApprove
        putV3ProjectsIdAccessRequestsUserIdApprove(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let userId = 56;*/ // Number | The user ID of the access requeste
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdAccessRequestsUserIdApprove(incomingOptions.id, incomingOptions.userId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdBoardsBoardIdListsListId
        putV3ProjectsIdBoardsBoardIdListsListId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let boardId = 56;*/ // Number | The ID of a boar
/*let listId = 56;*/ // Number | The ID of a lis
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdBoardsBoardIdListsListId(incomingOptions.id, incomingOptions.boardId, incomingOptions.listId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdEnvironmentsEnvironmentId
        putV3ProjectsIdEnvironmentsEnvironmentId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let environmentId = 56;*/ // Number | The environment I
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdEnvironmentsEnvironmentId(incomingOptions.id, incomingOptions.environmentId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdHooksHookId
        putV3ProjectsIdHooksHookId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let hookId = 56;*/ // Number | The ID of the hook to updat
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdHooksHookId(incomingOptions.id, incomingOptions.hookId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdIssuesIssueId
        putV3ProjectsIdIssuesIssueId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issu
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdIssuesIssueId(incomingOptions.id, incomingOptions.issueId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdIssuesNoteableIdNotesNoteId
        putV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a not
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdLabels
        putV3ProjectsIdLabels(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdLabels(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdMembersUserId
        putV3ProjectsIdMembersUserId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let userId = 56;*/ // Number | The user ID of the new membe
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdMembersUserId(incomingOptions.id, incomingOptions.userId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdMergeRequestMergeRequestId
        putV3ProjectsIdMergeRequestMergeRequestId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdMergeRequestMergeRequestId(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdMergeRequestMergeRequestIdMerge
        putV3ProjectsIdMergeRequestMergeRequestIdMerge(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdMergeRequestMergeRequestIdMerge(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdMergeRequestsMergeRequestId
        putV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdMergeRequestsMergeRequestIdMerge
        putV3ProjectsIdMergeRequestsMergeRequestIdMerge(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdMergeRequestsMergeRequestIdMerge(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
        putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a not
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdMilestonesMilestoneId
        putV3ProjectsIdMilestonesMilestoneId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let milestoneId = 56;*/ // Number | The ID of a project mileston
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdMilestonesMilestoneId(incomingOptions.id, incomingOptions.milestoneId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdNotificationSettings
        putV3ProjectsIdNotificationSettings(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The group ID or project ID or project NAMESPACE/PROJECT_NAM
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdNotificationSettings(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdRepositoryBranchesBranchProtect
        putV3ProjectsIdRepositoryBranchesBranchProtect(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let branch = "branch_example";*/ // String | The name of the branc
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdRepositoryBranchesBranchProtect(incomingOptions.id, incomingOptions.branch, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdRepositoryBranchesBranchUnprotect
        putV3ProjectsIdRepositoryBranchesBranchUnprotect(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let branch = "branch_example";*/ // String | The name of the branch
apiInstance.putV3ProjectsIdRepositoryBranchesBranchUnprotect(incomingOptions.id, incomingOptions.branch, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdRepositoryFiles
        putV3ProjectsIdRepositoryFiles(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdRepositoryFiles(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdRepositoryTagsTagNameRelease
        putV3ProjectsIdRepositoryTagsTagNameRelease(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let tagName = "tagName_example";*/ // String | The name of the ta
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdRepositoryTagsTagNameRelease(incomingOptions.id, incomingOptions.tagName, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesAsana
        putV3ProjectsIdServicesAsana(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesAsana(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesAssembla
        putV3ProjectsIdServicesAssembla(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesAssembla(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesBamboo
        putV3ProjectsIdServicesBamboo(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBamboo(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesBugzilla
        putV3ProjectsIdServicesBugzilla(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBugzilla(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesBuildkite
        putV3ProjectsIdServicesBuildkite(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBuildkite(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesBuildsEmail
        putV3ProjectsIdServicesBuildsEmail(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBuildsEmail(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesCampfire
        putV3ProjectsIdServicesCampfire(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesCampfire(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesCustomIssueTracker
        putV3ProjectsIdServicesCustomIssueTracker(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesCustomIssueTracker(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesDroneCi
        putV3ProjectsIdServicesDroneCi(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesDroneCi(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesEmailsOnPush
        putV3ProjectsIdServicesEmailsOnPush(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesEmailsOnPush(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesExternalWiki
        putV3ProjectsIdServicesExternalWiki(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesExternalWiki(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesFlowdock
        putV3ProjectsIdServicesFlowdock(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesFlowdock(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesGemnasium
        putV3ProjectsIdServicesGemnasium(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesGemnasium(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesHipchat
        putV3ProjectsIdServicesHipchat(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesHipchat(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesIrker
        putV3ProjectsIdServicesIrker(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesIrker(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesJira
        putV3ProjectsIdServicesJira(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesJira(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesKubernetes
        putV3ProjectsIdServicesKubernetes(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesKubernetes(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesMattermost
        putV3ProjectsIdServicesMattermost(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesMattermost(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesMattermostSlashCommands
        putV3ProjectsIdServicesMattermostSlashCommands(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesMattermostSlashCommands(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesPipelinesEmail
        putV3ProjectsIdServicesPipelinesEmail(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesPipelinesEmail(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesPivotaltracker
        putV3ProjectsIdServicesPivotaltracker(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesPivotaltracker(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesPushover
        putV3ProjectsIdServicesPushover(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesPushover(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesRedmine
        putV3ProjectsIdServicesRedmine(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesRedmine(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesSlack
        putV3ProjectsIdServicesSlack(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesSlack(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesSlackSlashCommands
        putV3ProjectsIdServicesSlackSlashCommands(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesSlackSlashCommands(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesTeamcity
        putV3ProjectsIdServicesTeamcity(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesTeamcity(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, '')
  }
});
        }

        
        // This is a function for putV3ProjectsIdSnippetsNoteableIdNotesNoteId
        putV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a not
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdSnippetsSnippetId
        putV3ProjectsIdSnippetsSnippetId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let snippetId = 56;*/ // Number | The ID of a project snippe
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdSnippetsSnippetId(incomingOptions.id, incomingOptions.snippetId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for putV3ProjectsIdVariablesKey
        putV3ProjectsIdVariablesKey(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let key = "key_example";*/ // String | The key of the variabl
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdVariablesKey(incomingOptions.id, incomingOptions.key, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3NotificationSettings
        getV3NotificationSettings(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.NotificationSettingsApi();
apiInstance.getV3NotificationSettings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for putV3NotificationSettings
        putV3NotificationSettings(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.NotificationSettingsApi()
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3NotificationSettings(incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3InternalBroadcastMessage
        getV3InternalBroadcastMessage(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.getV3InternalBroadcastMessage((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3InternalCheck
        getV3InternalCheck(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.getV3InternalCheck((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3InternalDiscover
        getV3InternalDiscover(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.getV3InternalDiscover((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3InternalMergeRequestUrls
        getV3InternalMergeRequestUrls(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.getV3InternalMergeRequestUrls((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for postV3InternalAllowed
        postV3InternalAllowed(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.postV3InternalAllowed((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for postV3InternalLfsAuthenticate
        postV3InternalLfsAuthenticate(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.postV3InternalLfsAuthenticate((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for postV3InternalTwoFactorRecoveryCodes
        postV3InternalTwoFactorRecoveryCodes(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.postV3InternalTwoFactorRecoveryCodes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for deleteV3HooksId
        deleteV3HooksId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.HooksApi()
/*let id = 56;*/ // Number | The ID of the system hook
apiInstance.deleteV3HooksId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for getV3Hooks
        getV3Hooks(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.HooksApi();
apiInstance.getV3Hooks((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3HooksId
        getV3HooksId(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.HooksApi()
/*let id = 56;*/ // Number | The ID of the system hook
apiInstance.getV3HooksId(incomingOptions.id, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
        // This is a function for postV3Hooks
        postV3Hooks(incomingOptions, cb) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.HooksApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Hooks(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    cb(error, null)
  } else {
    cb(null, data)
  }
});
        }

        
  }
  module.exports = new GitlabService();