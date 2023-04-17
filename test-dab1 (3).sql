-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2023 at 08:09 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test-dab1`
--

-- --------------------------------------------------------

--
-- Table structure for table `cropcategory`
--

CREATE TABLE `cropcategory` (
  `cropcatid` int(25) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cropcategory`
--

INSERT INTO `cropcategory` (`cropcatid`, `category`, `description`, `image`) VALUES
(1, 'Plantations', 'dgfdfcgg', ''),
(2, 'cashcrops', 'fgkvbpfdkg', ''),
(3, 'dfgh', 'nbvcx', 'https://i.ibb.co/5WcyvQR/07010d099ae8.png');

-- --------------------------------------------------------

--
-- Table structure for table `crops`
--

CREATE TABLE `crops` (
  `cropid` int(25) NOT NULL,
  `cropname` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `soil_type` varchar(255) NOT NULL,
  `climate` varchar(255) NOT NULL,
  `temperature` int(25) NOT NULL,
  `harvesting_time` varchar(255) NOT NULL,
  `price` varchar(25) NOT NULL,
  `image` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `crops`
--

INSERT INTO `crops` (`cropid`, `cropname`, `description`, `soil_type`, `climate`, `temperature`, `harvesting_time`, `price`, `image`) VALUES
(7, 'coconut', 'Mostly cultivated in kerala', 'black soil', 'winter', 27, 'every 2 months', '55', 'https://i.ibb.co/bXF1Gfz/4a2d544ca081.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `land`
--

CREATE TABLE `land` (
  `lid` int(25) NOT NULL,
  `userid` int(25) NOT NULL,
  `locationName` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `survey_number` varchar(255) NOT NULL,
  `extend` varchar(255) NOT NULL,
  `price_per_acer` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(25) NOT NULL,
  `advance` int(25) NOT NULL,
  `leaseperiod` int(11) NOT NULL,
  `ownername` varchar(25) NOT NULL,
  `ph` int(25) NOT NULL,
  `pottasium` int(25) NOT NULL,
  `phosphorous` int(25) NOT NULL,
  `nitrogen` int(25) NOT NULL,
  `status` int(25) NOT NULL,
  `humidity` int(25) NOT NULL,
  `rainfall` int(25) NOT NULL,
  `temper` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `land`
--

INSERT INTO `land` (`lid`, `userid`, `locationName`, `category`, `image`, `survey_number`, `extend`, `price_per_acer`, `description`, `price`, `advance`, `leaseperiod`, `ownername`, `ph`, `pottasium`, `phosphorous`, `nitrogen`, `status`, `humidity`, `rainfall`, `temper`) VALUES
(14, 2, 'Kottayam', 'farmland', 'https://i.ibb.co/KXCZRC0/53b2bef5a360.jpg', '203/15/06', '5', '10000', 'for agriculture ', 50000, 10000, 5, 'jubin', 7, 89, 65, 32, 0, 32, 23, 35),
(15, 2, 'Kottyam', 'Agriland', 'https://i.ibb.co/99rQ4hc/e831b5247082.jpg', '112/68', '3', '50000', 'for agri purposes', 150000, 50000, 2, 'jubin', 6, 36, 36, 32, 0, 26, 123, 32);

-- --------------------------------------------------------

--
-- Table structure for table `landcategory`
--

CREATE TABLE `landcategory` (
  `lcatid` int(25) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `landcategory`
--

INSERT INTO `landcategory` (`lcatid`, `category`, `description`, `image`) VALUES
(18, 'farmland', 'List your Farmland for lease. Our numerous farmers will search your agri property listings and contact you directly for leasing.', 'https://i.ibb.co/4M7FJsD/efb6f461f84f.jpg'),
(19, 'Agri_Land', 'List your Agricultural land for lease. Our numerous farmers will search your agri property listings and contact you directly for leasing.', 'https://i.ibb.co/gWcKmwh/80485eeb0168.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `pid` int(25) NOT NULL,
  `userid` int(25) NOT NULL,
  `landid` int(25) NOT NULL,
  `orderid` varchar(25) NOT NULL,
  `payment_status` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `pincode` int(25) NOT NULL,
  `house_name` varchar(255) NOT NULL,
  `phone` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `fullName`, `role`, `password`, `profile`, `street`, `city`, `pincode`, `house_name`, `phone`) VALUES
(1, 'admin@test.com', 'admin', 'admin', 'Password@123', '', '', '', 0, '', '0'),
(2, 'jubin@test.com', 'jubin', 'land_owner', 'jubin@CR7', '', 'Nedukunnam', 'kottayam', 689588, 'kulathungal', '7559070322'),
(3, 'raman@gmail.com', 'raman', 'farmer', 'raman@CR7', '', 'kulathur', 'thiruvalla', 325698, 'josco', '6235930322');

-- --------------------------------------------------------

--
-- Table structure for table `wishland`
--

CREATE TABLE `wishland` (
  `wlid` int(25) NOT NULL,
  `userid` int(25) NOT NULL,
  `name` varchar(25) NOT NULL,
  `prefered_location` varchar(255) NOT NULL,
  `prefered_category` varchar(255) NOT NULL,
  `prefered_extension` varchar(255) NOT NULL,
  `prefered_price` varchar(25) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `lease_period` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wishland`
--

INSERT INTO `wishland` (`wlid`, `userid`, `name`, `prefered_location`, `prefered_category`, `prefered_extension`, `prefered_price`, `Description`, `lease_period`) VALUES
(3, 2, 'Raman', 'kottayam', 'Agriland', '10', '120000', 'for crops cultivation', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cropcategory`
--
ALTER TABLE `cropcategory`
  ADD PRIMARY KEY (`cropcatid`);

--
-- Indexes for table `crops`
--
ALTER TABLE `crops`
  ADD PRIMARY KEY (`cropid`);

--
-- Indexes for table `land`
--
ALTER TABLE `land`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `landcategory`
--
ALTER TABLE `landcategory`
  ADD PRIMARY KEY (`lcatid`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique` (`email`);

--
-- Indexes for table `wishland`
--
ALTER TABLE `wishland`
  ADD PRIMARY KEY (`wlid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cropcategory`
--
ALTER TABLE `cropcategory`
  MODIFY `cropcatid` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `crops`
--
ALTER TABLE `crops`
  MODIFY `cropid` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `land`
--
ALTER TABLE `land`
  MODIFY `lid` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `landcategory`
--
ALTER TABLE `landcategory`
  MODIFY `lcatid` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `pid` int(25) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `wishland`
--
ALTER TABLE `wishland`
  MODIFY `wlid` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
