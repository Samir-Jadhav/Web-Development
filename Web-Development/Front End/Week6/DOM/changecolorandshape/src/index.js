const colors = ["red", "blue", "green", "yellow", "purple"];
        const shapes = ["square", "circle", "triangle"];
        
        function changeColor() {
            const shape = document.getElementById("outerdiv");
            const newColor = colors[Math.floor(Math.random() * colors.length)];
            shape.style.backgroundColor = newColor;
        }
        
        function changeShape() {
            const shape = document.getElementById("innerdiv");
            shape.className = "shape";
            const newShape = shapes[Math.floor(Math.random() * shapes.length)];
            shape.classList.add(newShape);
            
            if (newShape === "triangle") {
                shape.style.backgroundColor = "transparent";
            } else {
                shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            }
        }