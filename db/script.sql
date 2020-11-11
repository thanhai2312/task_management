DROP DATABASE IF EXISTS task_management;   
CREATE DATABASE IF NOT EXISTS task_management;   
USE task_management; 

DROP TABLE IF EXISTS JIssueTypes; 
CREATE TABLE IF NOT EXISTS JKssueTypes 
  ( 
     id         INT PRIMARY KEY auto_increment, 
     type       NVARCHAR(30) NOT NULL, 
  ); 

DROP TABLE IF EXISTS JIssueStatus; 
CREATE TABLE IF NOT EXISTS JIssueStatus 
  ( 
     id         INT PRIMARY KEY auto_increment, 
     position   NVARCHAR(30) NOT NULL, 
     status     CHAR(60) NOT NULL, 
     projectId  INT NOT NULL,
     FOREIGN KEY (projectId) REFERENCES JProject(id)
  ); 

  DROP TABLE IF EXISTS JIssuePriority;
  CREATE TABLE IF NOT EXISTS JIssuePriority
  (
      id        INT PRIMARY KEY auto_increment,
      priority  NVARCHAR(30) NOT NULL,
  )

  DROP TABLE IF EXISTS JIssue;
  CREATE TABLE IF NOT EXISTS JIssue 
  (
    id          bigint PRIMARY KEY
	title       TEXT
	issueTypeId bigint
	issueStatusId bigint
	issuePriorityId bigint
	listPosition number
	description TEXT
	reporterId  bigint
    userIds     bigint
	deadlineAt  datetime
	createdAt   datetime
	updatedAt   datetime
    FOREIGN KEY (issueTypeId) REFERENCES JIssueTypes(id)
    FOREIGN KEY (issueStatusId) REFERENCES JIssueStatus(id)
    FOREIGN KEY (issuePriorityId) REFERENCES JIssuePriority(id)

  ) 

DROP TABLE IF EXISTS JComments;
  CREATE TABLE IF NOT EXISTS JComments 
 {
    id bigint PRIMARY KEY
	body TEXT
	userId bigint
	issueId bigint
	createdAt datetime
	updatedAt datetime
    FOREIGN KEY (userId) REFERENCES JUsers(id)
    FOREIGN KEY (issueId) REFERENCES JIssue(id)

}

DROP TABLE IF EXISTS JUsers;
  CREATE TABLE IF NOT EXISTS JUsers 
{
    id bigint PRIMARY KEY
	name NVARCHAR(30)
	email VARCHAR(30)
	description TEXT
	avatarUrl TEXT
	createdAt datetime
	updatedAt datetime
}


DROP TABLE IF EXISTS JProjectCategories;
  CREATE TABLE IF NOT EXISTS JProjectCategories 
 {
  id bigint PRIMARY KEY
	category NVARCHAR(30)
}

DROP TABLE IF EXISTS JProjects;
  CREATE TABLE IF NOT EXISTS JProjects 
{
  	id bigint PRIMARY KEY
  	name NVARCHAR(30)
  	descriptio TEXT
  	projectCategoriesId bigint
  	createdAt datetime
  	updateAt datetime
  	groupId bigint
    FOREIGN KEY (projectCategoriesId) REFERENCES JProjectCategories(id)
    FOREIGN KEY (groupId) REFERENCES JGroups(id)

}

DROP TABLE IF EXISTS JUserProjects;
  CREATE TABLE IF NOT EXISTS JUserProjects 
{
  userId bigint
  projectId bigint
    FOREIGN KEY (userId) REFERENCES JUsers(id)
    FOREIGN KEY (projectId) REFERENCES JProject(id)

}

DROP TABLE IF EXISTS JGroups;
  CREATE TABLE IF NOT EXISTS JGroups 
(
  id bigint PRIMARY KEY
  name NVARCHAR(30)
  userIds bigint
  description TEXT
  createdAt datetime
  updateAt datetime
)