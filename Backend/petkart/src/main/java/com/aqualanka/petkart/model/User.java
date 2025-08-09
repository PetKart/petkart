package com.aqualanka.petkart.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String id;

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String dateOfBirth;
    private String address;
    private String city;
    private String postalCode;

    private boolean isSeller;
    private boolean isBuyer;
    private boolean isPetShop;
    private boolean isBoth;

    // Pet Shop Details
    private String shopName;
    private String shopLicense;
    private String shopDescription;
    private String yearsInBusiness;
    private String specialties;

    private String password; // Hashed

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(String dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getPostalCode() { return postalCode; }
    public void setPostalCode(String postalCode) { this.postalCode = postalCode; }

    public boolean isSeller() { return isSeller; }
    public void setSeller(boolean seller) { isSeller = seller; }

    public boolean isBuyer() { return isBuyer; }
    public void setBuyer(boolean buyer) { isBuyer = buyer; }

    public boolean isPetShop() { return isPetShop; }
    public void setPetShop(boolean petShop) { isPetShop = petShop; }

    public boolean isBoth() { return isBoth; }
    public void setBoth(boolean both) { isBoth = both; }

    public String getShopName() { return shopName; }
    public void setShopName(String shopName) { this.shopName = shopName; }

    public String getShopLicense() { return shopLicense; }
    public void setShopLicense(String shopLicense) { this.shopLicense = shopLicense; }

    public String getShopDescription() { return shopDescription; }
    public void setShopDescription(String shopDescription) { this.shopDescription = shopDescription; }

    public String getYearsInBusiness() { return yearsInBusiness; }
    public void setYearsInBusiness(String yearsInBusiness) { this.yearsInBusiness = yearsInBusiness; }

    public String getSpecialties() { return specialties; }
    public void setSpecialties(String specialties) { this.specialties = specialties; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

}