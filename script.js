const districtMap = {
    "Telangana": [
        "Adilabad", "Bhadradri Kothagudem", "Hanumakonda", "Hyderabad", "Jagtial", 
        "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", 
        "Karimnagar", "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad", 
        "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", 
        "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", 
        "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", 
        "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"
    ],
    "Andhra Pradesh": [
        "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", 
        "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", 
        "West Godavari", "YSR Kadapa"
    ],
    "Karnataka": [
        "Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", 
        "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", 
        "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", 
        "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", 
        "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", 
        "Uttara Kannada", "Vijayapura", "Yadgir"
    ],
    "Kerala": [
        "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", 
        "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", 
        "Thiruvananthapuram", "Thrissur", "Wayanad"
    ],
    "Tamil Nadu": [
        "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", 
        "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", 
        "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", 
        "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", 
        "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", 
        "Thiruvallur", "Thiruvarur", "Thoothukudi", "Tiruchirappalli", 
        "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvannamalai", "Vellore", 
        "Viluppuram", "Virudhunagar"
    ]
};

function populateDistricts() {
    const stateSelect = document.getElementById("stateSelect").value;
    const districtSelect = document.getElementById("districtSelect");

    // Clear previous districts
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (stateSelect) {
        districtSelect.disabled = false;

        // Populate district dropdown
        districtMap[stateSelect].forEach(function(district) {
            const option = document.createElement("option");
            option.value = district;
            option.text = district;
            districtSelect.appendChild(option);
        });
    } else {
        districtSelect.disabled = true;
    }
}

function navigateToLocation() {
    const district = document.getElementById("districtSelect").value;
    if (district) {
        const formattedDistrict = district.toLowerCase().replace(/\s+/g, '_');
        window.location.href = `${formattedDistrict}.html`;
    } else {
        alert('Please select a district.');
    }
}
