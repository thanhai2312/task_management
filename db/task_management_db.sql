-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2020 at 08:02 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_management_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `jissuepriorities`
--

CREATE TABLE `jissuepriorities` (
  `id` bigint(20) NOT NULL,
  `priority` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jissues`
--

CREATE TABLE `jissues` (
  `id` bigint(20) NOT NULL,
  `title` text DEFAULT NULL,
  `issueTypeId` bigint(20) DEFAULT NULL,
  `issueStatusId` bigint(20) DEFAULT NULL,
  `issuePriorityId` bigint(20) DEFAULT NULL,
  `listPosition` decimal(10,0) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `reporterId` varchar(255) DEFAULT NULL,
  `userIds` varchar(255) DEFAULT NULL,
  `deadlineAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jissuestatus`
--

CREATE TABLE `jissuestatus` (
  `id` bigint(20) NOT NULL,
  `position` int(30) NOT NULL,
  `status` char(60) NOT NULL,
  `projectId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jissuestatus`
--

INSERT INTO `jissuestatus` (`id`, `position`, `status`, `projectId`) VALUES
(1, 0, 'Backlog', 101),
(2, 1, 'Selected', 101),
(3, 2, 'InProgress', 101),
(4, 3, 'Done', 101);

-- --------------------------------------------------------

--
-- Table structure for table `jissuetypes`
--

CREATE TABLE `jissuetypes` (
  `id` bigint(20) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jissuetypes`
--

INSERT INTO `jissuetypes` (`id`, `type`) VALUES
(1, 'aaa'),
(2, 'bbb');

-- --------------------------------------------------------

--
-- Table structure for table `jjobs`
--

CREATE TABLE `jjobs` (
  `id` bigint(20) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `finish` tinyint(1) DEFAULT NULL,
  `userIds` bigint(20) DEFAULT NULL,
  `deadlineAt` datetime DEFAULT NULL,
  `listJobId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jlistjobs`
--

CREATE TABLE `jlistjobs` (
  `id` bigint(20) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `issueId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jprojectcategories`
--

CREATE TABLE `jprojectcategories` (
  `id` bigint(20) NOT NULL,
  `category` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jprojectcategories`
--

INSERT INTO `jprojectcategories` (`id`, `category`) VALUES
(1, 'Software'),
(2, 'Marketing'),
(3, 'Business');

-- --------------------------------------------------------

--
-- Table structure for table `jprojects`
--

CREATE TABLE `jprojects` (
  `id` bigint(20) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `projectCategoriesId` bigint(20) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jprojects`
--

INSERT INTO `jprojects` (`id`, `name`, `description`, `projectCategoriesId`, `createdAt`, `updatedAt`) VALUES
(101, 'DATN', 'ĐỒ ÁN TỐT NGHIỆP', 1, '2020-12-04 00:00:00', '2020-12-04 00:00:00'),
(102, 'DEMO', NULL, 2, '2020-12-06 00:00:00', NULL),
(103, 'DEMO_2', NULL, 2, '2020-12-06 00:00:00', NULL),
(104, 'sssss', NULL, 1, '2020-12-06 18:18:25', NULL),
(105, 'vinhnd', NULL, 1, '2020-12-06 18:28:32', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `juserprojects`
--

CREATE TABLE `juserprojects` (
  `userId` varchar(255) DEFAULT NULL,
  `projectId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `juserprojects`
--

INSERT INTO `juserprojects` (`userId`, `projectId`) VALUES
('7ac265f9-b9ac-443f-a2b2-795682e579a4', 101),
('94502aad-c97f-43e1-a9d1-28cf3e4937a7', 101),
('610451aa-10c8-4d7e-9363-311357c0b0dd', 101),
('d65047e5-f4cf-4caa-9a38-6073dcbab7d1', 101),
('d65047e5-f4cf-4caa-9a38-6073dcbab7d1', 102),
('d65047e5-f4cf-4caa-9a38-6073dcbab7d1', 103),
('d65047e5-f4cf-4caa-9a38-6073dcbab7d1', 104),
('d65047e5-f4cf-4caa-9a38-6073dcbab7d1', 105);

-- --------------------------------------------------------

--
-- Table structure for table `jusers`
--

CREATE TABLE `jusers` (
  `id` varchar(255) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `avatarUrl` text DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `projectAdmin` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jusers`
--

INSERT INTO `jusers` (`id`, `name`, `email`, `description`, `avatarUrl`, `password`, `createdAt`, `updatedAt`, `projectAdmin`) VALUES
('430451aa-10c8-4d7e-9363-311357c0b0cc', 'Tran Hoang Bao', 'khongphaidangvuadau09@gmail.com', NULL, 'https://firebasestorage.googleapis.com/v0/b/task-management-client.appspot.com/o/images%2Ftranhoangbao.jpg?alt=media&token=5c11f90f-3d71-49df-990a-ea6974d8bdce', '123123', '2020-12-01 00:00:00', '2020-12-04 00:00:00', NULL),
('610451aa-10c8-4d7e-9363-311357c0b0dd', 'Linh Linh', 'linhsasukeno1@gmail.com', NULL, 'https://firebasestorage.googleapis.com/v0/b/task-management-client.appspot.com/o/images%2Flinhlinh.jpg?alt=media&token=3d024b36-67a4-4073-ba76-04448f154a28', '123123', '2020-12-01 00:00:00', '2020-12-04 00:00:00', '101'),
('7ac265f9-b9ac-443f-a2b2-795682e579a4', 'Nguyen Duc Thanh Hai', 'thanhhai2312@gmail.com', NULL, 'https://firebasestorage.googleapis.com/v0/b/task-management-client.appspot.com/o/images%2Fnguyenducthanhhai.jpg?alt=media&token=fe78b011-95bf-45ce-b8ff-d79526e440bb', '123123', '2020-12-01 00:00:00', '2020-12-04 00:00:00', NULL),
('94502aad-c97f-43e1-a9d1-28cf3e4937a7', 'Nguyen Duc Thien', 'tducthien1997@gmail.com', NULL, 'https://firebasestorage.googleapis.com/v0/b/task-management-client.appspot.com/o/images%2Fnguyenducthien.jpg?alt=media&token=ebd6853a-67ba-4c22-bdd4-615a064a7782', '123123', '2020-12-01 00:00:00', '2020-12-04 00:00:00', NULL),
('d65047e5-f4cf-4caa-9a38-6073dcbab7d1', 'Nguyen Duc Vinh', 'ducvinhnguyen2609@gmail.com', NULL, 'https://firebasestorage.googleapis.com/v0/b/task-management-client.appspot.com/o/images%2Fnguyenducvinh.jpg?alt=media&token=e9ee6540-e78e-458e-a4dc-7f1a548409d9', '123123', '2020-12-01 00:00:00', '2020-12-04 00:00:00', '101,104,105');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jissuepriorities`
--
ALTER TABLE `jissuepriorities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jissues`
--
ALTER TABLE `jissues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `issuePriorityId` (`issuePriorityId`),
  ADD KEY `issueStatusId` (`issueStatusId`),
  ADD KEY `issueTypeId` (`issueTypeId`);

--
-- Indexes for table `jissuestatus`
--
ALTER TABLE `jissuestatus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectId` (`projectId`);

--
-- Indexes for table `jissuetypes`
--
ALTER TABLE `jissuetypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jjobs`
--
ALTER TABLE `jjobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `listJobId` (`listJobId`);

--
-- Indexes for table `jlistjobs`
--
ALTER TABLE `jlistjobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `issueId` (`issueId`);

--
-- Indexes for table `jprojectcategories`
--
ALTER TABLE `jprojectcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jprojects`
--
ALTER TABLE `jprojects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectCategoriesId` (`projectCategoriesId`);

--
-- Indexes for table `juserprojects`
--
ALTER TABLE `juserprojects`
  ADD KEY `userId` (`userId`),
  ADD KEY `projectId` (`projectId`);

--
-- Indexes for table `jusers`
--
ALTER TABLE `jusers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jissuepriorities`
--
ALTER TABLE `jissuepriorities`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jissuestatus`
--
ALTER TABLE `jissuestatus`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `jissuetypes`
--
ALTER TABLE `jissuetypes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jissues`
--
ALTER TABLE `jissues`
  ADD CONSTRAINT `jissue_ibfk_1` FOREIGN KEY (`issuePriorityId`) REFERENCES `jissuepriorities` (`id`),
  ADD CONSTRAINT `jissue_ibfk_2` FOREIGN KEY (`issueStatusId`) REFERENCES `jissuestatus` (`id`),
  ADD CONSTRAINT `jissue_ibfk_3` FOREIGN KEY (`issueTypeId`) REFERENCES `jissuetypes` (`id`);

--
-- Constraints for table `jissuestatus`
--
ALTER TABLE `jissuestatus`
  ADD CONSTRAINT `jissuestatus_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `jprojects` (`id`);

--
-- Constraints for table `jjobs`
--
ALTER TABLE `jjobs`
  ADD CONSTRAINT `jjobs_ibfk_1` FOREIGN KEY (`listJobId`) REFERENCES `jlistjobs` (`id`);

--
-- Constraints for table `jlistjobs`
--
ALTER TABLE `jlistjobs`
  ADD CONSTRAINT `jlistjobs_ibfk_1` FOREIGN KEY (`issueId`) REFERENCES `jissues` (`id`);

--
-- Constraints for table `jprojects`
--
ALTER TABLE `jprojects`
  ADD CONSTRAINT `jprojects_ibfk_1` FOREIGN KEY (`projectCategoriesId`) REFERENCES `jprojectcategories` (`id`);

--
-- Constraints for table `juserprojects`
--
ALTER TABLE `juserprojects`
  ADD CONSTRAINT `juserprojects_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `jprojects` (`id`),
  ADD CONSTRAINT `juserprojects_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `jusers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
