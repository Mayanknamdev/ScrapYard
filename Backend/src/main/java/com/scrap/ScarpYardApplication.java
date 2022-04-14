package com.scrap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@SpringBootApplication
public class ScarpYardApplication
{

	public static void main(String[] args)
	{
		SpringApplication.run(ScarpYardApplication.class, args);
	}

}
