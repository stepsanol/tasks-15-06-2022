const week = ['Mon', 'Tues', 'Wen', 'Thur', 'Fri', 'Sat', 'Sun'];
    
    for (let i = 0; i < week.length; i += 1) {
        let budd = week[i];
        if (i === 0) budd = budd.italics(); // понедельник
        else if (i > 4) budd = budd.bold(); // выходные

        const conclusion = document.createElement('div');
        conclusion.innerHTML = budd;
        document.body.appendChild(conclusion);   
    }