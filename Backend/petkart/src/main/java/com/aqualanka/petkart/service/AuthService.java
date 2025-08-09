package com.aqualanka.petkart.service;

import com.aqualanka.petkart.dto.LoginDto;
import com.aqualanka.petkart.dto.SignupDto;
import com.aqualanka.petkart.model.User;
import com.aqualanka.petkart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User signup(SignupDto dto) throws Exception {
        if (userRepository.findByEmail(dto.email).isPresent()) {
            throw new Exception("Email already registered");
        }
        User user = new User();
        user.setFirstName(dto.firstName);
        user.setLastName(dto.lastName);
        user.setEmail(dto.email);
        user.setPhone(dto.phone);
        user.setDateOfBirth(dto.dateOfBirth);
        user.setAddress(dto.address);
        user.setCity(dto.city);
        user.setPostalCode(dto.postalCode);
        user.setSeller(dto.isSeller);
        user.setBuyer(dto.isBuyer);
        user.setPetShop(dto.isPetShop);
        user.setBoth(dto.isBoth);
        user.setShopName(dto.shopName);
        user.setShopLicense(dto.shopLicense);
        user.setShopDescription(dto.shopDescription);
        user.setYearsInBusiness(dto.yearsInBusiness);
        user.setSpecialties(dto.specialties);
        user.setPassword(passwordEncoder.encode(dto.password));
        return userRepository.save(user);
    }

    public User login(LoginDto dto) throws Exception {
        User user = userRepository.findByEmail(dto.email)
                .orElseThrow(() -> new Exception("Invalid credentials"));
        if (!passwordEncoder.matches(dto.password, user.getPassword())) {
            throw new Exception("Invalid credentials");
        }
        return user;
    }
}