-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 04, 2019 at 08:37 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
--
-- Database: `2.19wickedsales`
--
-- --------------------------------------------------------
--
-- Table structure for table `images`
--
CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `products_id` mediumint(8) UNSIGNED NOT NULL,
  `url` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- Dumping data for table `images`
--
INSERT INTO `images` (`id`, `products_id`, `url`) VALUES
(1, 1, 'images/61Dyzt7uM9L._SL1224_.jpg'),
(2, 2, 'images/wicked_shoes_custom_converse.jpg'),
(3, 2, 'images/article-2323855-19C2226B000005DC-855_634x397.jpg'),
(4, 3, 'images/Wicked-LEAD-28-11-17.jpg'),
(5, 3, 'images/The-National-Touring-Company-of-WICKED-Photo-by-Joan-Marcus-2017.jpg'),
(6, 3, 'images/wicked-movie-release-date.jpg'),
(7, 3, 'images/image-1024x575.jpg');
-- --------------------------------------------------------
--
-- Table structure for table `products`
--
CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `price` bigint(20) UNSIGNED NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `misc_details` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- Dumping data for table `products`
--
INSERT INTO `products` (`id`, `name`, `price`, `description`, `misc_details`) VALUES
(1, 'Wicked Thing', 2000, 'This product will solve all of your ills, cure famine, and make you look more like brad pitt, regardless if you are male or female', '{\"height\":\"20cm\",\"width\":\"15cm\",\"weight\":4.2,\"manufacturer\":\"Therbal\"}'),
(2, 'Wicked Clogs', 42150, 'These shoes are the noisiest shoes you will ever wear. They rival the decibels of Vivian\'s keyboard.', '{\"availableSizes\":[5,6,7,8,9,10,13,14,17,20],\"colors\":\"red, green, blue, natural\",\"materials\":\"pine, balsa, oak, hemp\"}'),
(3, 'Wicked Brick', 525, 'It\'s brick, it\'s brick, it\'s big, it\'s bad, it\'s stone. It\'s better than bad, it\'s heavy. Guaranteed to keep the big bad wolf at bay and useful for conveying opinions to other within 20 feet.', '{\"height\":\"3 inches\",\"width\":\"3 inches\",\"length\":\"6 inches\",\"colors\":\"red, cherry, maroon, speckled\",\"manufacturer\":\"Riot Brick Studios\",\"weight\":\"8labs\",\"coarseness\":\"very rough\"}');
--
-- Indexes for dumped tables
--
--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);
--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);
--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
