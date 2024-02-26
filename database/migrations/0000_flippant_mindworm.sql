CREATE TABLE `domain` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`url` varchar(100) NOT NULL,
	CONSTRAINT `domain_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `owner` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`first_name` varchar(130) NOT NULL,
	`last_name` varchar(130) NOT NULL,
	`email` varchar(266) NOT NULL,
	`phone` varchar(20),
	`address` varchar(100) NOT NULL,
	`address2` varchar(100),
	`city` varchar(100) NOT NULL,
	`state` varchar(100) NOT NULL,
	`postcode` varchar(20) NOT NULL,
	`country` varchar(100) NOT NULL,
	`business_name` varchar(100),
	`business_registration_number` varchar(100),
	CONSTRAINT `owner_id` PRIMARY KEY(`id`)
);
