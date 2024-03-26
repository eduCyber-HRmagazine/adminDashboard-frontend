document.addEventListener("DOMContentLoaded", function() {
    // Object containing arrays for each tag category
    var tagCategories = {
        "Countries": ["USA", "Canada", "France", "Germany", "Netherlands", "Greece", "Belgium", "Luxembourg", "Egypt"],
        "Places-to-Go": ["Restaurant", "Hotel", "Club", "Cinema", "Mall", "FunFair", "Theme Park", "Masjid", "Church"],
        "Creatures": ["Animals", "Birds", "Whales", "Butterflies", "Flowers", "Trees", "Palms"],
        "Nature": ["Park", "Sea", "Ocean", "Mountain", "Forest", "Hill", "Lake", "Jungle", "Clouds"],
        "Devices": ["Laptop", "Tablet", "Mobile phone", "Ipod", "Head phones", "Ear phones", "Speakers", "Microphone"],
        "Buildings": ["Tower", "Villa", "Appartment", "Flat", "Studio", "Penta house", "Twin house", "chalet","Lodge"],
        "proffesions": ["Engineering", "Medicine", "Agriculture", "Public Health ", "Industry", "Tourism", "Journalism"],
    };

    var container = document.getElementById('tags-container');
    container.className = 'tags-scrollable-container';

    Object.keys(tagCategories).forEach(function(tagCategory) { 
        var tagCategoryDiv = document.createElement('div');
        tagCategoryDiv.className = 'tag-category'; 

        tagCategories[tagCategory].forEach(function(tag) {
            var tagDiv = document.createElement('div');
            tagDiv.className = 'tag'; 

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'tags[]';
            checkbox.id = tagCategory + '-' + tag; 
            checkbox.className = 'tag-checkbox';

            var label = document.createElement('label');
            label.setAttribute('for', checkbox.id);
            label.textContent = tag;

            tagDiv.appendChild(checkbox);
            tagDiv.appendChild(label);
            tagCategoryDiv.appendChild(tagDiv);
        });

        container.appendChild(tagCategoryDiv);
    });
});
