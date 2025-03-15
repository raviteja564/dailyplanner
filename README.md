<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Planner</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .container {
            text-align: center;
            padding: 2rem;
            margin-top: 10vh;
        }

        h1 {
            font-size: 3.5rem;
            color: #2c3e50;
            margin-bottom: 1.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .quote {
            font-size: 1.4rem;
            color: #34495e;
            max-width: 600px;
            margin: 2rem auto;
            padding: 1.5rem;
            background: rgba(255,255,255,0.9);
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2.5rem;
            font-size: 1.2rem;
            background: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 30px;
            transition: all 0.3s ease;
            margin-top: 2rem;
            border: none;
            cursor: pointer;
        }

        .cta-button:hover {
            background: #2980b9;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>DailyPlanner</h1>
        
        <div class="quote">
            <p>"The key is not to prioritize what's on your schedule, but to schedule your priorities."</p>
            <p>- Stephen R. Covey</p>
        </div>

        <a href="https://raviteja564.github.io/dailyplanner/testapp%20(1).html" class="cta-button">
            Start Planning Now →
        </a>
    </div>
</body>
</html>
