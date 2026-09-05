document.addEventListener("DOMContentLoaded", function() {
    // सर्च बक्समा टाइप गर्दा समाचार वा किवर्ड फिल्टर गर्ने आधार
    const searchInput = document.querySelector(".search-box input");
    if (searchInput) {
        searchInput.addEventListener("keyup", function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // यहाँ तपाईंले आफ्नो न्युज कार्डहरूलाई सर्च गराउन सक्नुहुन्छ
            console.log("Searching for: ", searchTerm);
        });
    }

    // स्टक टिकर वा अन्य डाइनामिक फिचरहरू यहाँ थप्न सकिन्छ
    console.log("News Portal JavaScript Loaded Successfully!");
});
