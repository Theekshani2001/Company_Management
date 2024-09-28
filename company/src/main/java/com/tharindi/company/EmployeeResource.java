package com.tharindi.company;


import com.tharindi.company.model.Employee;
import com.tharindi.company.model.User;
import com.tharindi.company.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/employee")
public class EmployeeResource {

    private final EmployeeService employeeService;
    @Autowired
    public EmployeeResource(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> employeesList=employeeService.findAllEmployees();
        return new ResponseEntity<>(employeesList, HttpStatus.OK);
    }
}
