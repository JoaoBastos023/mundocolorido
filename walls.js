// walls.js
import * as THREE from 'three';

// Helper: Create a Box3 from two corner coordinates
function createBoxFromCorners(p1, p2) {
    const min = new THREE.Vector3(
        Math.min(p1[0], p2[0]),
        Math.min(p1[1], p2[1]),
        Math.min(p1[2], p2[2])
    );

    const max = new THREE.Vector3(
        Math.max(p1[0], p2[0]),
        Math.max(p1[1], p2[1]),
        Math.max(p1[2], p2[2])
    );

    return new THREE.Box3(min, max);
}

// Main function: define multiple wall boxes
export function createWalls() {
    const wallBoxes = [];

    // Each entry: [minCorner, maxCorner]
    const wallData = [
        [[-7, 2, 5], [-7, 1, 44.3]],
        [[-7, 2, 5], [-26, 1, 5]],
        [[-26, 2, 5], [-26, 1, 11]],
        [[-26, 2, 11], [-22, 1, 11]],
        [[-1, 2, 3], [2, 1, 3]],
        [[2.1, 2, 3], [2.1, 1, -3]],
        [[2.1, 2, -3], [-2.7, 1, -3]],
        [[-2.7, 2, -3], [-2.7, 1, 3]],
        [[7, 2, 5], [7, 1, 13.4 ]],
        [[7, 2, 13.4 ], [17.5, 1, 13.4]],
        [[17.5, 2, 13.4], [17.5, 1, 9.8]],
        [[17.5, 2, 9.8], [24, 1, 9.8]],
        [[24, 2, 9.8], [24, 1, 12]],
        [[21, 2, 12.6], [21, 1, 17.3]],
        [[6.7, 2, 16.9], [17.5, 1, 16.9]],
        [[17.5, 2, 16.9], [17.5, 1, 20]],
        [[17.5, 2, 20], [24,1, 20]],
        [[24,2,20], [24,1,17.5]],
        [[24, 2, 20], [29.5, 1, 20]],
        [[35,2,18], [29.5, 1, 18]],
        [[29.5, 2, 18], [29.5, 1, 20]],
        [[21.8, 2, 15], [34, 1, 15]],
        [[34.5, 2, 9.5], [34.5, 1, 18]],
        [[24, 2, 12], [34, 1, 12]],
        [[6.5, 2, 16.9], [6.5, 1, 24.5]],
        [[6.5, 2, 24.5], [29.9, 1, 24.5]],
        [[29.9, 2, 24.5], [29.9, 1, 32.2]],
        [[29.9, 2, 32.2], [21, 1, 30.7]],
        [[21, 2, 32], [7, 1, 32]],
        [[8, 2, 32], [8, 1, 26.7]],
        [[7,2,32], [7, 1, 37.5]],
        [[7,2,40], [7,1,44.5]],
        [[7,2,44.5], [43,1,44.5]],
        [[43,2,44.5], [43,1,16.5]],
        [[43,2,16.5], [35.3,1,16.5]],
        [[35.3,2,16.5], [35.3,1,10]],
        [[35.3,2,10], [40,1,10]],
        [[7,2,5], [37,1,5]],
        [[7.6,2,-4.8], [43.3,1,-4.8]],
        [[43.3,2,-4.8], [44,1,-22.7]],

        // PAC SUN - SECURITY
        [[7.5, 2, -5], [7.5, 1, -33]],

        // SECURITY
        [[7.5, 2, -32], [11.5, 1, -32]],
        [[11.5, 2, -32], [11.5, 1, -26]],
        [[11.5, 2, -26], [19.5, 1, - 26]],
        [[19.5, 2, -26], [19.5, 1, -32]],
        [[19.5, 2, -32], [15, 1, -32]],
        [[15, 2, -32], [15, 1, -40]],
        [[7.5, 2, -40.2], [7.5, 1, -34.8]],
        [[7.5, 2, -40.2], [15, 1, -40.2]],

        // RIGHT DOORS
        [[15,2,-40.2], [15,1,-55]],
        [[15,2,-55], [1.5,1,-55]],
        [[-1.5,2,-55], [-6,1,-55]],
        [[-6,2,-55], [-6,1,-50.8]],
        [[-6, 2, -50.8], [-23, 1, -50.8]],

        [[-23, 2, -50.8], [-23, 1, -40.5]],
        [[-23, 2, -40.5], [-7.5, 1, -40.5]],

        [[-7.5, 2, -40.5], [-7.5, 1, -4.5]],
        [[-7.5,2,-4.5], [-25.9, 1, -4.5]],
        [[-25.9,2,-4.5], [-25.9,1,-12]],
        [[-25.9,2,-12], [-68.2,1,-12]],
        [[-68.2,2,-12], [-68.2,1,26.5]],
        [[-68.2,2,26.5], [-28,1,26.5]],
        [[-29,2,26.5], [-29,1,15]],
        [[-29,2,15], [-22,1,15]],
        [[-22,2,15], [-22,1,11]],

        // Left wall of XPRESS
        [[-7, 1.9, 44.3], [-20.6,1,44.3]],

        // CINEMA
        [[8, 2, 72], [8, 1, 75.3]],
        [[8, 2, 75.3], [1.9, 1, 75.3]],
        [[1.9, 2, 75.3], [1.9, 1, 78]],
        [[1.9, 2, 78.5], [-12.4, 1, 78.5]],
        [[-12.4, 2, 78.5], [-12.4, 1, 89.4]],
        [[-12.4, 2, 89.4], [7, 1, 89.4]],
        [[7, 2, 89.4], [7, 1, 100.5]],
        [[7, 2, 100.5], [-1, 1, 100.5]],
        [[-1, 2, 100.5], [-1, 1, 95]],
        [[-1, 2, 95], [3, 1, 92.8]],
        [[3, 2, 92.8], [-17, 1, 92.8]],
        [[-17.2, 2, 92.8], [-17.2, 1, 76]],
        [[-17.2, 2, 75.8], [-1.5, 1, 75.8]],
        [[-1.5, 2, 75.8], [-1.5, 1, 72]],
        [[-1.5, 2, 72], [3.5, 1, 72]],

        // Front of Cinema
        [[-20.6,2,55.7], [-7.8,1,55.7]],
        [[-7.8,2,55.7], [-7.8,1,66.5]],
        [[-7.8,2,66.5], [-2.6,1,66.5]],
        [[-2.6,2,66.5], [-2.6,1,71.8]],
        [[-2.6,2,71.8], [3.5,1,71.8]],
        [[6.5,2,71.8], [8.5,1,71.8]],
        [[8.5, 2, 71.8], [8.5, 1, 59]],
        [[8.5, 2, 59], [11.7, 1, 59]],
        
        // Dix store
        [[11.7, 2, 59], [11.7, 1, 55.8]],
        [[11.7, 2, 55.8], [58.5, 1, 55.8]],
        
        // BAR XYZ 
        [[58.5, 2, 55.8], [59, 1, 53]],
        [[59,2,55.8], [64.5,1,55.8]],
        [[64.5,2,55.8], [64.5,1,52.3]],
        [[64.5,2,52.3], [70.9,1,52.3]],
        [[70.9,2,52.3], [70.9,2,55.8]],
        [[70.9,2,55.8], [83,1,55.8]],
        [[77.5,2,55.8], [77.5,1,49.9]],
        [[77.5,2,49.9], [80.8,1,49.9]],
        
        // BAR XYZ BATHROOMS
        [[83,2,55.8], [83,1,41]],
        [[83,2,41], [77,1,41]],
        [[77,2,41], [77,1,46.5]],
        [[77,2,46.5], [80.8,1,46.5]],
        [[77,2,46.5], [58.8,1,46.5]],
        [[58.8,2,46.5], [58.8,1,49.7]],
        
        // 2 stores closed
        // first closed store right side
        [[58.8,2,46.5], [58.8,1,41.5]],
        
        // inside store
        [[58.8,2,44.8], [76.5,1,44.8]],
        [[76.5,2,44.8], [76.5,1,40.5]],
        [[76.5,2,40.5], [86,1,40.5]],
        [[86,2,40.5], [86,1,33]],
        [[86,2,33], [58.8,1,33]],
        [[76.5,2,33], [76.5,1,37.8]],
        
        // first closed store entrance
        [[58.8,2,41.5], [58.8,2,36.5]],
        
        // first closed store left side
        [[58.8,2,36.5], [58.8,1,19.8]],
        
        // inside second store
        [[58.8,2,25.5], [79,1,26.5]],
        [[68.8,2,26.5], [68.8,1,30]],
        [[68.8,2,30], [83.5,1,30]],
        [[83.5,2,30], [83.5,1,11.5]],
        [[83.5,2,11.5], [75,1,11.5]],
        [[75,2,11.5], [75,1,14.5]],
        [[75,2,14.5], [71.1,1,14.5]],
        [[71.1,2,14.5], [71.1,1,11.5]],
        [[71.1,2,11.5], [58.8,1,11.5]],
        
        
        // second closed store entrance
        [[58.8,2,19.8], [58.8,2,14.1]],
        
        // second closed store left side
        [[58.8,2,14.1], [58.8,1,5]],
        
        [[58.5, 2, 5], [65.3, 1, 5]],
        [[65.3, 2, 5], [65.3, 1, 7.5]],
        [[65.3, 2, 7.5], [90.5, 1, 7.5]],
        [[90.5, 2, 7.5], [90.5, 1, 17]],
        [[90.5, 2, 17], [118, 1, 16]],
        [[118, 2, 16], [118, 1, 9.6]],
        [[118, 2, 9.6], [119, 1, 9.6]],
        [[119, 2, 9.6], [119, 1, 17]],
        [[119, 2, 17], [124.2, 1, 17]],
        [[124.2, 2, 17], [124.2, 1, 3]],
        [[124.2, 2, 3], [128, 1, 1]],
        [[128, 2, 1], [127, 1, -19]],
        [[127, 2, -19], [125, 1, -19]],
        [[125, 2, -19], [125, 1, -24]],
        [[125, 2, -24], [112, 1, -24]],
        [[112, 2, -24], [112, 1, -32]],
        [[112, 2, -32], [103.5, 1, -32]],
        [[103.5, 2, -32], [103.5, 1, -24]],
        [[103.5, 2, -24], [99, 1, -24]],
        [[99, 2, -24], [99, 1, -33]],
        [[99, 2, -33], [80, 1, -33]],
        [[80, 2, -33], [80, 1, -15]],
        [[80, 2, -15], [82, 1, -15]],
        [[82, 2, -15], [82, 1, -5]],
        [[82, 2, -5], [62, 1, -5]],
        [[62, 2, -5], [62, 1, -2]],
        [[62, 2, -2], [57.5, 1, -2]],
        [[57.5, 2, -2], [57.5, 1, -15]],
        
        // CA CLOTH BACK SIDE
        [[24.5, 2, 32], [24.5, 1, 44]],
        [[21, 2, 32], [21, 1, 41]],
        [[21, 2, 34.5], [9.4, 1, 34.5]],
        [[9.4, 2, 34.5], [9.4, 1, 37.9]],
        [[9.4, 2, 41], [9.4, 1, 44]],
        
        
        // CAFE Z BARRIER
        [[57.5, 2, -20], [57.5, 1, -52.2]],
        // AIF RIGHT SIDE
        [[44.5, 2, -46.5], [44.5, 1, -26.5]],
        // AIT ENTRANCE
        [[44.5, 2, -26.5], [44.5, 1, -22]],
        // Add more boxes here...
        
        // SUPERMARKET WALLS
        // SUPERMARKET RIGHT SIDE
        [[57.5, 2, -46.5], [54, 1, -46.5]],
        // SUPERMARKET LEFT SIDE
        [[48.5, 2, -46.5], [44.5, 1, -46.5]],
        
        // SUPERMARKET CARTS
        [[57.5,2, -52.2], [44.5, 1, -52.2]],
        [[46, 2, -52.2], [46, 1, -60.5]],
        [[46, 2, -60.5], [50.2, 1, -60.5]],
        [[50.2, 2, -60.5], [50.2, 1, -72]],
        [[52.2, 2, -72], [57.6, 1, -72]],
        [[57.6, 2, -72], [57.6, 1, -94.5]],
        [[57.6, 2, -94.5], [50, 1, -94.5]],
        [[50, 2, -94.5], [50, 1, -102.8]],
        [[50, 2, -102.8], [5, 1, -102.8]],
        // WEREHOUSE
        [[5, 2, -102.8], [5, 1, -84]],
        [[5, 2, -84], [-9.3, 1, -84]],
        // INFRONT OF FORKLIFT
        [[-9.3, 2, -84], [-9.3, 1, -69]],
        [[-9.3, 2, -69], [4.7, 1, -69]],
        // BEHIND MAN
        [[4.7, 2, -69], [4.7, 1, -63.5]],
        [[4.7, 2, -63.5], [16.2, 1, -63.5]],
        [[16.2, 2, -63.5], [16.2, 1, -50.4]],
        [[16.2, 2, -50.4], [22.5, 1, -50.4]],
        [[22.5, 2, -50.4], [22.5, 1, -48.4]],
        [[22.5, 2, -48.4], [44.5, 1, -48.4]],
        
        // SEA
        [[18.5, 2, -53.5], [22.4, 1, -53.5]],
        [[22.4, 2, -53.5], [22.4, 1, -67.5]],
        [[22.4, 2, -67.5], [18.5, 1, -65.5]],
        [[18.5, 2, -65.5], [16.5, 1, -80]],
        
        // FRIDGES
        [[16.5, 2, -68.8], [9.4, 1, -66]],
        [[9.4, 2, -66], [8.2, 1, -80]],
        // FRONT OF FRIDGES / MEETING ROOM
        [[18 ,2, -83], [17.5, 1, -99]],
        [[18, 2, -99], [8.8, 1, -99]],
        [[8.8, 2, -99], [8.8, 1, -92.5]],
        [[8.8, 2, -90.5], [8.8, 1, -83]],
        [[8.8, 2, -83], [17, 1, -84.3]],
        
        // Supermarket shelves
        [[27, 2, -95], [45, 1, -91.3]],
        [[27, 2, -87.5], [45, 1, -84.3]],
        [[27, 2, -80.5], [45, 1, -77.3]],
        [[27, 2, -73.5], [45, 1, -70.3]],
        [[28, 2, -66.5], [45, 1, -63.3]],

        // Restaurant entrance in front of security
        [[1.5, 2 , -55], [-1.6, 1, -55]],
        
        
        
        // Garage
        [[-21, 2, 44], [-32.9, 1, 44]],
        [[-32.9, 2, 44], [-32.9, 1, 47]],
        [[-32.9, 2, 47], [-41.7, 1, 47]],
        [[-41.7, 2, 47], [-41.7, 1, 55.2]],
        [[-41.7, 2, 55.2], [-40, 1, 55.2]],
        [[-40, 2, 55.2], [-40, 1, 58]],
        [[-40, 2, 58], [-32, 1, 58]],
        [[-32, 2, 58], [-32, 1, 68.5]],
        [[-32, 2, 68.5], [-21, 1, 68.5]],
        [[-21, 2, 68.5], [-21, 1, 55]],

        // Garage Door
        [[-20.6,2,44.3], [-20.6,1,55.7]],
        
        
        // SUPERMARKET DOOR
        [[44.5, 2, -47], [44.5, 1, -52]]
    ];
    
    for (const [p1, p2] of wallData) {
        wallBoxes.push(createBoxFromCorners(p1, p2));
    }

    return wallBoxes;
}
