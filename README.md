# AWS Cloud Resume Challenge 
Welcome to my AWS Cloud Resume Challenge project repository! This project showcases my proficiency in cloud technologies by deploying my resume website using various AWS services and web technologies to create a dynamic and scalable online resume.
<br/><br/> 

## Website URL
[resume.jdroche.com](https://resume.jdroche.com){:target="_blank"}
<br/><br/> 

## Architecture Diagram
![image](https://github.com/DJRoche509/aws-cloud-resume/assets/100164051/51ec54f7-c5d8-4e3f-bed4-5c9c3f170e85)



<br/> 

## Project Overview
This project contains the code and configurations used to deploy a resume website hosted on AWS. The project structure consists of three main directories:

- **.github**: Includes GitHub Actions workflow for CI/CD.
- **infra**: Contains Terraform configurations for infrastructure setup.
- **website**: Consists of the web application files for the resume site.

<br/>

## Directory Structure
Here's the project directory structure for easy navigation:
  ```
:.
|   README.md
|
+---.github
|   \---workflows
|           front-end-cicd.yml
|
+---infra
|   |   .gitignore
|   |   .terraform.lock.hcl
|   |   main.tf
|   |   provider.tf
|   |   terraform.tfstate
|   |   terraform.tfstate.backup
|   |
|   \---lambda
|           func.py
|           func.zip
|
\---website
    |   contactForm.html
    |   formStyles.css
    |   index.html
    |   script.js
    |   styles.css
    |
    \---images
            [image files]
    
  ```
<br/>

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the Repository**:
    ```
    git clone https://github.com/DJRoche509/cloudResumeChallenge.git
    ```

2. **Infrastructure Setup**:
   - Navigate to the `infra` directory.
   - Update AWS credentials and configurations in `.tf` files.
   - Execute Terraform commands to create the infrastructure.

     `terraform init` , `terraform plan`, `terraform apply`

3. **Deploy the Website**:
   - Navigate to the `website` directory.
   - Modify HTML, CSS, or JS files as needed.
   - Deploy the website on a local server or any hosting service.
<br/>

## Deployment

The website is deployed using AWS services through the infrastructure defined in the Terraform configurations (*infra* directory). The deployment process involves:
- **Amazon S3**: Hosting the static website files.
- **AWS Lambda**: Serverless function for visitor count tracking.
- **DynamoDB**: Database for visitor count persistence.
- **AWS CloudFront (Optional)**: Content caching and delivery optimizations.
<br/>

## AWS Services and Technologies Used
### -- AWS CloudFront
  - AWS CloudFront is used to distribute the website content globally. It improves the site's load times and provides a secure HTTPS connection.

### -- Amazon S3
  - Amazon S3 hosts the static website content, including HTML, CSS, JavaScript, and image files.

### -- AWS Lambda
  - AWS Lambda runs the backend code for the visitor counter and contact form submission without provisioning or managing servers.

### -- Amazon DynamoDB
DynamoDB is used as the database for storing and retrieving the visitor count data.

### -- AWS Route 53
  - Route 53 effectively connects the website's domain name to the AWS infrastructure.

### -- Other Technologies
  - **Terraform**: Used for infrastructure as code, ensuring that all AWS resources are provisioned consistently and efficiently.
  - **GitHub Actions**: Automates the CI/CD pipeline for the frontend, ensuring seamless deployment and updates.
<br/>

## Key Files and Their Functionality
`script.js`
  This JavaScript file contains the logic for:

  - Visitor counter.
  - Contact form submission handling.
  - Dynamic text display for job titles.
  - Portfolio projects display and interaction.
    
`func.py`
A Python script for AWS Lambda, it manages the visitor counter functionality by interacting with DynamoDB.

`main.tf`
The main Terraform configuration file defining the AWS resources, including the Lambda function and its associated roles and policies.
<br/>

## Contributions
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

### How to Contribute?
To contribute to this project, please follow these steps:

1. Clone the repository.
2. Make your changes or improvements.
3. Test your changes.
4. Submit a pull request with a detailed description of your contributions.
<br/><br/>

## License
This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

Feel free to explore the code, use it as a reference, or contribute to enhance the project further!
