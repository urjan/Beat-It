from twilio.rest import Client

account = "AC99b4a100f1abb3d020ebd7ed37323cdf"
token = "20ac0302aa5dd35da66c1ffe5e5c26b5"
client = Client(account, token)

message = client.messages.create(to="+12159513923", from_="+12675364672",
                                 body="Hey Urja! I have some heart issue... I need help ASAP!!")
