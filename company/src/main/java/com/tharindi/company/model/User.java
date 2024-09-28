package com.tharindi.company.model;


import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.io.Serializable;

@Entity

public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    @Valid


    @NotNull(message = "Name is mandatory")
    @NotBlank(message = "Name is mandatory")
    @Size(min = 3,max =30, message = "Name must be between 3 and 30 characters")
    private String name;

    @NotNull(message = "Email is mandatory")
    @NotBlank(message = "Name is mandatory")
    @Size(min = 11,max =100, message = "Email must be between 11 and 100 characters")
    private String email;

    @NotNull(message = "Job title is mandatory")
    @NotBlank(message = "Job title is mandatory")
    @Size(min = 3,max =30, message = "Job title must be between 3 and 30 characters")
    private String jobTitle;

    @NotNull(message = "Phone number is mandatory")
    @NotBlank(message = "Phone number is mandatory")
    @Size(min = 10,max =10, message = "Phone number must have 10 numbers")
    private String phone;

    @NotNull(message = "Image is mandatory")
    @NotBlank(message = "Image is mandatory")
    private String imageUrl;

    @Column(nullable = false,updatable = false)
    private String userCode;


    public User(){}

    public User(String name, String email, String jobTitle, String phone, String imageUrl, String userCode) {
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.userCode = userCode;
    }

    public User(Long id, String name, String email, String jobTitle, String phone, String imageUrl, String userCode) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.userCode = userCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getUserCode() {
        return userCode;
    }

    public void setUserCode(String userCode) {
        this.userCode = userCode;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", phone='" + phone + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", userCode='" + userCode + '\'' +
                '}';
    }
}
