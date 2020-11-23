-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th10 21, 2020 lúc 10:16 AM
-- Phiên bản máy phục vụ: 10.4.14-MariaDB
-- Phiên bản PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `task_management`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `JIssues`
--

CREATE TABLE `JIssues` (
  `id` bigint(20) NOT NULL,
  `title` text DEFAULT NULL,
  `issueTypeId` bigint(20) DEFAULT NULL,
  `issueStatusId` bigint(20) DEFAULT NULL,
  `issuePriorityId` bigint(20) DEFAULT NULL,
  `listPosition` decimal(10,0) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `reporterId` varchar(30) DEFAULT NULL,
  `userIds` varchar(30) DEFAULT NULL,
  `deadlineAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `JIssuePriorities`
--

CREATE TABLE `JIssuePriorities` (
  `id` bigint(20) NOT NULL,
  `priority` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `JIssueStatus`
--

CREATE TABLE `JIssueStatus` (
  `id` bigint(20) NOT NULL,
  `position` number NOT NULL,
  `status` char(60) NOT NULL,
  `projectId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `JJobs`
--

CREATE TABLE `JJobs` (
  `id` bigint(20) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `finish` tinyint(1) DEFAULT NULL,
  `userIds` bigint(20) DEFAULT NULL,
  `deadlineAt` datetime DEFAULT NULL,
  `listJobId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `JIssueTypes`
--

CREATE TABLE `JIssueTypes` (
  `id` bigint(20) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `JListJobs`
--

CREATE TABLE `JListJobs` (
  `id` bigint(20) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `issueId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `JProjectCategories`
--

CREATE TABLE `JProjectCategories` (
  `id` bigint(20) NOT NULL,
  `category` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `JProjects`
--

CREATE TABLE `JProjects` (
  `id` bigint(20) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `projectCategoriesId` bigint(20) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updateAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `JUserProjects`
--

CREATE TABLE `JUserProjects` (
  `userId` varchar(30) DEFAULT NULL,
  `projectId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `JUsers`
--

CREATE TABLE `JUsers` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30)  NOT NULL,
  `password` varchar(30) NOT NULL
  `email` varchar(30)  NOT NULL,
  `description` text  DEFAULT NULL,
  `avatarUrl` text DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `projectAdmin` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `JIssues`
--
ALTER TABLE `JIssues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `issuePriorityId` (`issuePriorityId`),
  ADD KEY `issueStatusId` (`issueStatusId`),
  ADD KEY `issueTypeId` (`issueTypeId`);

--
-- Chỉ mục cho bảng `JIssuePriorities`
--
ALTER TABLE `JIssuePriorities`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `JIssueStatus`
--
ALTER TABLE `JIssueStatus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectId` (`projectId`);

--
-- Chỉ mục cho bảng `JJobs`
--
ALTER TABLE `JJobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `listJobId` (`listJobId`);

--
-- Chỉ mục cho bảng `JIssueTypes`
--
ALTER TABLE `JIssueTypes`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `JListJobs`
--
ALTER TABLE `JListJobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `issueId` (`issueId`);

--
-- Chỉ mục cho bảng `JProjectCategories`
--
ALTER TABLE `JProjectCategories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `JProjects`
--
ALTER TABLE `JProjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectCategoriesId` (`projectCategoriesId`);

--
-- Chỉ mục cho bảng `JUserProjects`
--
ALTER TABLE `JUserProjects`
  ADD KEY `userId` (`userId`),
  ADD KEY `projectId` (`projectId`);

--
-- Chỉ mục cho bảng `JUsers`
--
ALTER TABLE `JUsers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `JIssuePriorities`
--
ALTER TABLE `JIssuePriorities`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `JIssueStatus`
--
ALTER TABLE `JIssueStatus`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `JIssueTypes`
--
ALTER TABLE `JIssueTypes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `JIssues`
--
ALTER TABLE `JIssues`
  ADD CONSTRAINT `jissue_ibfk_1` FOREIGN KEY (`issuePriorityId`) REFERENCES `JIssuePriorities` (`id`),
  ADD CONSTRAINT `jissue_ibfk_2` FOREIGN KEY (`issueStatusId`) REFERENCES `JIssueStatus` (`id`),
  ADD CONSTRAINT `jissue_ibfk_3` FOREIGN KEY (`issueTypeId`) REFERENCES `JIssueTypes` (`id`);

--
-- Các ràng buộc cho bảng `JIssueStatus`
--
ALTER TABLE `JIssueStatus`
  ADD CONSTRAINT `jissuestatus_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `JProjects` (`id`);

--
-- Các ràng buộc cho bảng `JJobs`
--
ALTER TABLE `JJobs`
  ADD CONSTRAINT `jjobs_ibfk_1` FOREIGN KEY (`listJobId`) REFERENCES `JListJobs` (`id`);

--
-- Các ràng buộc cho bảng `JListJobs`
--
ALTER TABLE `JListJobs`
  ADD CONSTRAINT `jlistjobs_ibfk_1` FOREIGN KEY (`issueId`) REFERENCES `JIssues` (`id`);

--
-- Các ràng buộc cho bảng `JProjects`
--
ALTER TABLE `JProjects`
  ADD CONSTRAINT `jprojects_ibfk_1` FOREIGN KEY (`projectCategoriesId`) REFERENCES `JProjectCategories` (`id`);

--
-- Các ràng buộc cho bảng `JUserProjects`
--
ALTER TABLE `JUserProjects`
  ADD CONSTRAINT `juserprojects_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `JProjects` (`id`),
  ADD CONSTRAINT `juserprojects_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `JUsers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
