package com.univespsalto2022piviiigrupo009.controledevacinas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.univespsalto2022piviiigrupo009.controledevacinas.entities.Vacina;
import com.univespsalto2022piviiigrupo009.controledevacinas.services.VacinaService;

@RestController
@RequestMapping(value = "/vacinas")
public class VacinaController {

	@Autowired
	private VacinaService service;
	
	@GetMapping
	public Page<Vacina> findVacinas(
			@RequestParam (value ="minDate", defaultValue = "") String minDate,
			@RequestParam (value ="maxDate", defaultValue = "") String maxDate, 
			Pageable pageable) {
		return service.findVacinas(minDate, maxDate, pageable);
	}
}
