
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
        search_input: "Enter your search..."


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
        search_input: "Entrez votre recherche..."
      }
    };
  
    // Function to update the text based on selected language
    function updateLanguage(language) {
      document.getElementById('title').textContent = content[language].title;
      document.getElementById('search').textContent = content[language].search;
      // document.getElementById('search_button').textContent = content[language].search_button;
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
      document.getElementById('search_input').placeholder = content[language].search_input;
      
    }
      
      
    // Event listener for language selection
    document.addEventListener('DOMContentLoaded', () => {
      const languageSelector = document.getElementById('language-selector');

      languageSelector.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
      });

      // Set default language to English
      updateLanguage('en');
    });

  