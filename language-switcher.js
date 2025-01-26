
    // Translation data
    const content = {
      en: {
        title: "Find Your Path",
        search: "Search by",
        // search_button: "Search",
        filter: "Filter Student housings by Services",
        wifi: "Wifi/Internet",
        parking: "Parking",
        laverie: "Laundry",
        sport: "Sport",
        handicap: "Handicap",
        rest: "Restaurant",
        home_menu: "Home",
        about_menu: "About",
        school_search:"School",
        student_housing_search: "Student Housing",
        custom_address_search: "Custom Address",
        search_prompt: "Type your search:",
        search_input: {
          residence: "Enter the name of the residence...",
          address: "Enter a custom address...",
          school: "Enter the name of the school..."
        }
      },

      fr: {
        title: "Trouvez votre chemin",
        search: "Rechercher par",
        // search_button: "Rechercher",
        filter: "Filtrer les logements étudiants par services",
        wifi: "Wifi/Internet",
        parking: "Parking",
        laverie: "Laverie",
        sport: "Sport",
        handicap: "Handicap",
        rest: "Restauration",
        home_menu: "Accueil",
        about_menu: "À propos",
        school_search: "École",
        student_housing_search: "Logement étudiant",
        custom_address_search: "Adresse personnalisée",
        search_prompt: "Tapez votre recherche :",
        search_input: {
          residence: "Entrez le nom de la résidence...",
          address: "Entrez une adresse personnalisée...",
          school: "Entrez le nom de l'école..."
        }
      }
    };
  
    // Function to update placeholder based on the current language and search type
    function updateSearchPlaceholder(language, searchTypeValue) {
      const placeholders = content[language].search_input;
      if (placeholders[searchTypeValue]) {
        document.getElementById("search_input").placeholder = placeholders[searchTypeValue];
      } else {
        document.getElementById("search_input").placeholder = ""; // Fallback if no placeholder is found
      }
    }
    
    // Function to update the text based on selected language
    function updateLanguage(language) {
      document.getElementById('title').textContent = content[language].title;
      document.getElementById('search').textContent = content[language].search;
      document.getElementById('filter').textContent = content[language].filter;
      document.getElementById('wifi').textContent = content[language].wifi;
      document.getElementById('parking').textContent = content[language].parking;
      document.getElementById('laverie').textContent = content[language].laverie;
      document.getElementById('sport').textContent = content[language].sport;
      document.getElementById('handicap').textContent = content[language].handicap;
      document.getElementById('rest').textContent = content[language].rest;
      document.getElementById('home_menu').textContent = content[language].home_menu;
      document.getElementById('about_menu').textContent = content[language].about_menu;
      document.getElementById('school_search').textContent = content[language].school_search;
      document.getElementById('student_housing_search').textContent = content[language].student_housing_search;
      document.getElementById('custom_address_search').textContent = content[language].custom_address_search;
      document.getElementById('search_prompt').textContent = content[language].search_prompt;
      
      // Update the search input placeholder based on the current search type
      const searchTypeValue = document.getElementById("search-type").value; // Get the current search type
      updateSearchPlaceholder(language, searchTypeValue);
    }
      
      
    // Event listener for language selection
    document.addEventListener('DOMContentLoaded', () => {
      const languageSelector = document.getElementById('language-selector');
      const searchType = document.getElementById("search-type");
      const searchInput = document.getElementById("search_input");

      // Event listener for language selection
      languageSelector.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;
        updateLanguage(selectedLanguage);
      });

      // Event listener for search type selection
      searchType.addEventListener("change", () => {
        const selectedLanguage = languageSelector.value; // Get the current language
        const searchTypeValue = searchType.value; // Get the selected search type
        searchInput.value = ""; // Reset the input field
        updateSearchPlaceholder(selectedLanguage, searchTypeValue);
      });

      // Set default language to English and initialize the UI
      updateLanguage("en");
    });

  