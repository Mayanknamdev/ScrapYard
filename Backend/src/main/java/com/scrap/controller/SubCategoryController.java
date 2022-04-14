package com.scrap.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.scrap.dtos.SellerDto;
import com.scrap.pojos.Register;
import com.scrap.pojos.SubCategory;
import com.scrap.services.SubCategoryService;

@CrossOrigin
@RestController

public class SubCategoryController
{
	@Autowired
	private SubCategoryService subCategoryService;

	// user view the stock
	@GetMapping("/getAllStock")
	public ResponseEntity<?> findAllStock()
	{

		try
		{
			List<SubCategory> list = subCategoryService.findAll();
			if (list.isEmpty())
				return Response.status(HttpStatus.NOT_FOUND);
			return Response.success(list);
		} catch (Exception e)
		{
			return Response.error(e.getMessage());
		}

	}
	// seller view his selling itmes only
		@PutMapping("/getProduct/{id}")
		public ResponseEntity<?> findProduct(@PathVariable("id") int userId)
		{
			List<SubCategory> list = subCategoryService.findProduct(userId);
			if (list == null)
				return Response.status(HttpStatus.NOT_FOUND);
			return Response.success(list);

		}

	// user can add stock ..that means he is selling his product by adding the stock
	// ..Clicking on add new product button on down RHS.
	@PostMapping("/sellProduct")
	public ResponseEntity<?> sellProduct(@RequestBody SubCategory subCategory)
	{
		try
		{
			SubCategory subCat= subCategoryService.sellProduct(subCategory);
			if (subCat == null )
				return Response.status(HttpStatus.NOT_FOUND);
			return Response.success(subCat);
		} catch (Exception e)
		{
			return Response.error(e.getMessage());
		}
	}
//not in use
	// seller can edit his Product details
	@PutMapping("/updateProduct")
	public ResponseEntity<?> updateProduct(@RequestBody SubCategory subCategory)
	{
		try
		{
			SubCategory subCategory1 = subCategoryService.save(subCategory);
			if (subCategory1 == null)

				return Response.status(HttpStatus.NOT_FOUND);
			return Response.success(subCategory1);
		} catch (Exception e)
		{
			return Response.error(e.getMessage());
		}
	}

	// user can delete a stock
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteById(@PathVariable int id)
	{
		try
		{
			int noOfRowsDeleted = subCategoryService.deleteById(id);
			if (noOfRowsDeleted == 0)
				return Response.status(HttpStatus.NOT_FOUND);
			return Response.success("no. of rows deleted is " + noOfRowsDeleted);
		} catch (Exception e)
		{
			return Response.error(e.getMessage());
		}
	}
	
	// to find name of the seller of the product when user buys the
		// product = For Buy=
		@PostMapping("/Seller")
		public ResponseEntity<?> findSeller(@RequestBody SellerDto dto)
		{
			Register register = subCategoryService.findSeller(dto);
			return Response.success(register);
		}

}
