import requests
import json
import time

def fetch_places(api_key, location, radius=5000, place_type='restaurant'):
    # Base URL for Google Places API
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    places = []
    
    # Parameters for the API request
    params = {
        'location': location,
        'radius': radius,
        'type': place_type,
        'key': api_key
    }
    
    while True:
        # Send the request and capture the response
        response = requests.get(url, params=params)
        # Load results into a JSON format
        results = json.loads(response.text)
        
        # Check for the status of the request
        if results.get("status") == "OK":
            places.extend(results.get("results", []))
            print(f"Fetched {len(results.get('results', []))} places")
            # Handle pagination by checking for a next_page_token
            if "next_page_token" in results:
                params['pagetoken'] = results['next_page_token']
                time.sleep(2)  # Necessary to wait before the next token becomes valid
            else:
                break
        else:
            print("Error:", results.get("status"))
            break
            
    return places

def fetch_place_details(api_key, place_id):
    # URL for Place Details
    details_url = "https://maps.googleapis.com/maps/api/place/details/json"
    
    # Parameters for the Place Details API
    params = {
        'place_id': place_id,
        'fields': 'name,rating,formatted_phone_number,formatted_address',
        'key': api_key
    }
    
    # Make the request
    response = requests.get(details_url, params=params)
    details = json.loads(response.text)
    
    if details.get("status") == "OK":
        return details.get("result", {})
    else:
        print("Error fetching details:", details.get("status"))
        return None

# Main part of the script
api_key = ""  # Replace with your API Key
location = "28.5562,77.1000"  # Approximate coordinates of IGI Airport T3

# Fetch initial list of places
places = fetch_places(api_key, location)

# Now fetch details for each place (optional: you might select a few due to API limits)
for place in places[:10]:  # Example: get details for the first 10 places
    details = fetch_place_details(api_key, place['place_id'])
    if details:
        print(details['name'], "-", details.get('formatted_address', 'No address provided'))
