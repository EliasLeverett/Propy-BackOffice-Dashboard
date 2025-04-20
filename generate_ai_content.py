from google import genai

# Initialize the client with your API key
client = genai.Client(api_key="AIzaSyC8hnLne1heN-ZBb5zuIPaPrWoYqIQJau0")

# Generate content using the specified model
response = client.models.generate_content(
    model="gemini-2.0-flash", contents="Explain how AI works in a few words"
)

# Print the response
print(response.text)