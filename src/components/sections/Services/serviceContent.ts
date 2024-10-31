// src/sections/Services/serviceContent.ts

interface Myth {
    myth: string;
    reality: string;
  }
  
  interface Statistic {
    label: string;
    value: string;
  }
  
  interface ServiceContent {
    title: string;
    description: string;
    whatWeDo: string[];
    didYouKnow: string[];
    guarantees: string[];
    successStory: string;
    myths: Myth[];
    statistics: Statistic[];
  }
  
  interface ServiceContentMap {
    [key: string]: ServiceContent;
  }
  
  export const serviceContent: ServiceContentMap = {
    veterinaryCare: {
      title: "Veterinary Care Excellence",
      description: "At VetCare Pro, we believe in providing more than just medical care – we create lasting relationships built on trust, expertise, and compassionate service. Our state-of-the-art facility and experienced team are dedicated to keeping your animals healthy and happy throughout their lives.",
      whatWeDo: [
        "Comprehensive health assessments using advanced diagnostic tools",
        "Preventive care programs tailored to your animal's specific needs",
        "Advanced surgical procedures with modern equipment",
        "Regular health monitoring and wellness programs",
        "24/7 emergency care services",
        "Specialized treatment plans for chronic conditions"
      ],
      didYouKnow: [
        "Animals hide signs of illness as a survival instinct - regular check-ups can catch issues before they become serious",
        "Our clinic uses the same advanced imaging technology found in human hospitals",
        "We maintain digital health records that can be accessed by approved family members anytime",
        "Our success rate in complex surgeries is 95% above industry average"
      ],
      guarantees: [
        "100% satisfaction guarantee on all our services",
        "Free follow-up consultations within 7 days of treatment",
        "Transparent pricing with no hidden fees",
        "Access to our veterinary team via our 24/7 helpline"
      ],
      successStory: "Last year, we treated Max, a 12-year-old German Shepherd who was diagnosed with a rare heart condition. Through our advanced diagnostic capabilities and specialized treatment plan, Max made a full recovery and is now enjoying long walks with his family again. His case has been featured in veterinary journals as a breakthrough in geriatric pet care.",
      myths: [
        {
          myth: "Annual check-ups are unnecessary if my pet seems healthy",
          reality: "Regular check-ups can detect potential health issues before they become serious, saving both money and ensuring better health outcomes"
        },
        {
          myth: "Veterinary care is just like human healthcare but simpler",
          reality: "Veterinary medicine requires understanding multiple species, each with unique anatomies and health needs, often without the ability to communicate symptoms directly"
        },
        {
          myth: "Modern veterinary care is too expensive",
          reality: "Preventive care is actually more cost-effective than treating serious conditions. We offer flexible payment plans and pet insurance options to make quality care accessible"
        }
      ],
      statistics: [
        {
          label: "Successful Treatments",
          value: "98%"
        },
        {
          label: "Years of Combined Experience",
          value: "75+"
        },
        {
          label: "Happy Patients",
          value: "50K+"
        },
        {
          label: "Emergency Response Time",
          value: "<30min"
        }
      ]
    },
  
    nutritionAndFeed: {
      title: "Expert Animal Nutrition & Feed Solutions",
      description: "We believe proper nutrition is the cornerstone of animal health. Our nutrition experts combine scientific knowledge with practical experience to provide customized feeding solutions that optimize health, performance, and well-being for all species.",
      whatWeDo: [
        "Customized feed formulation based on species and life stage",
        "Nutritional assessment and dietary planning",
        "Feed quality testing and analysis",
        "Supplement recommendations and sourcing",
        "Growth monitoring and feed adjustment programs",
        "Feed storage and management consultation"
      ],
      didYouKnow: [
        "Different animal species require up to 40 different essential nutrients daily",
        "Our feed formulations are tested in ISO-certified laboratories",
        "Proper nutrition can extend an animal's lifespan by up to 25%",
        "We source ingredients from certified organic farms where possible"
      ],
      guarantees: [
        "Feed quality testing certificates with every bulk purchase",
        "Money-back guarantee if feed quality doesn't meet standards",
        "Free feed storage consultation for bulk buyers",
        "Regular nutritional assessment updates"
      ],
      successStory: "We worked with a local dairy farm that was struggling with milk production. After implementing our specialized nutrition program, their milk yield increased by 40% within three months, and the herd's overall health improved significantly. The farm has since become a model for nutritional excellence in the region.",
      myths: [
        {
          myth: "Generic feed is just as good as specialized feed",
          reality: "Specialized feed is formulated for specific species and life stages, optimizing health and performance while potentially reducing overall feed costs"
        },
        {
          myth: "Natural feeds don't need supplementation",
          reality: "Even natural feeds may lack essential nutrients due to soil depletion and modern farming practices. Strategic supplementation ensures complete nutrition"
        },
        {
          myth: "More protein always means better growth",
          reality: "Balanced nutrition is key - excess protein can strain organs and lead to health issues. The right protein-to-energy ratio is crucial"
        }
      ],
      statistics: [
        {
          label: "Feed Formulations Available",
          value: "200+"
        },
        {
          label: "Quality Tests Per Batch",
          value: "50+"
        },
        {
          label: "Satisfied Farms",
          value: "1000+"
        },
        {
          label: "Years of Research",
          value: "25+"
        }
      ]
    },

    emergencyServices: {
        title: "24/7 Emergency Veterinary Care",
        description: "When seconds count, our emergency team is ready. We provide round-the-clock critical care with state-of-the-art equipment and a highly trained team ready to handle any veterinary emergency.",
        whatWeDo: [
          "Immediate trauma care and stabilization",
          "Emergency surgery capabilities",
          "Critical care monitoring",
          "Blood transfusion services",
          "Emergency diagnostic imaging",
          "Urgent care consultations"
        ],
        didYouKnow: [
          "Our emergency response team can be mobilized within 3 minutes",
          "We maintain a rare blood bank for multiple species",
          "Our facility has a dedicated emergency surgery suite",
          "We use AI-powered diagnostic tools for faster treatment decisions"
        ],
        guarantees: [
          "Maximum 30-minute response time for critical emergencies",
          "24/7 availability including holidays",
          "Direct access to senior veterinarians",
          "Comprehensive emergency care protocols"
        ],
        successStory: "Last month, we received an emergency call about Raja, a prize-winning horse suffering from severe colic. Our mobile unit reached the stable within 20 minutes, performed emergency procedures on-site, and successfully stabilized the animal. Raja made a full recovery and is back to training, with his owner crediting our swift response for saving his life - and their investment.",
        myths: [
          {
            myth: "Emergency care is only needed for obvious injuries",
            reality: "Many life-threatening conditions show subtle signs initially. Early emergency intervention often leads to better outcomes"
          },
          {
            myth: "All veterinary clinics offer the same emergency care",
            reality: "We maintain specialized emergency equipment and staff trained in emergency medicine, offering a higher level of critical care"
          },
          {
            myth: "Emergency care is too expensive to be worth it",
            reality: "Delayed treatment often leads to more complicated and expensive procedures. Early intervention can save both lives and money"
          }
        ],
        statistics: [
          {
            label: "Average Response Time",
            value: "15min"
          },
          {
            label: "Emergency Cases Handled",
            value: "10K+"
          },
          {
            label: "Success Rate",
            value: "97%"
          },
          {
            label: "Emergency Units",
            value: "5"
          }
        ]
      },
    
      laboratoryServices: {
        title: "Advanced Veterinary Laboratory Services",
        description: "Our state-of-the-art laboratory facility combines cutting-edge technology with expert analysis to provide accurate, timely diagnostics for optimal treatment decisions. We pride ourselves on being at the forefront of veterinary diagnostics.",
        whatWeDo: [
          "Comprehensive blood work and analysis",
          "Pathology services and tissue analysis",
          "Molecular diagnostics and PCR testing",
          "Hormone and thyroid testing",
          "Genetic testing and screening",
          "Microbiology and culture services"
        ],
        didYouKnow: [
          "Our lab processes over 1000 tests daily with 99.9% accuracy",
          "We use AI-assisted analysis for faster, more accurate results",
          "Our genetic testing can predict certain health risks years in advance",
          "We maintain digital records of all lab results for lifetime analysis"
        ],
        guarantees: [
          "Results within 24 hours for routine tests",
          "Triple verification system for critical results",
          "Secure online access to test results",
          "Consultation with lab specialists included"
        ],
        successStory: "Through our advanced genetic screening, we identified a rare genetic condition in a breeding line of prize cattle. This early detection helped the farm modify their breeding program, potentially saving millions in future losses and ensuring healthier future generations.",
        myths: [
          {
            myth: "Basic tests are enough for most conditions",
            reality: "Comprehensive testing often reveals underlying issues that basic tests miss, leading to more effective treatment plans"
          },
          {
            myth: "Lab results are the same everywhere",
            reality: "Our advanced equipment and expert analysis provide more detailed insights than standard labs, often detecting issues others might miss"
          },
          {
            myth: "Laboratory testing is just an extra expense",
            reality: "Accurate diagnostics save money by ensuring the right treatment first time, avoiding costly trial-and-error approaches"
          }
        ],
        statistics: [
          {
            label: "Tests Available",
            value: "500+"
          },
          {
            label: "Accuracy Rate",
            value: "99.9%"
          },
          {
            label: "Results Turnaround",
            value: "24hrs"
          },
          {
            label: "Specialized Tests",
            value: "100+"
          }
        ]
      },
    
      breedingServices: {
        title: "Professional Animal Breeding Services",
        description: "Our breeding program combines cutting-edge reproductive technology with generations of expertise to ensure successful, healthy breeding outcomes. We prioritize genetic diversity, health, and breed standard excellence in every program.",
        whatWeDo: [
          "Comprehensive breeding soundness evaluations",
          "Artificial insemination services",
          "Embryo transfer programs",
          "Genetic testing and counseling",
          "Pregnancy monitoring and care",
          "Breeding program design and management"
        ],
        didYouKnow: [
          "Our genetic mapping can predict offspring characteristics with 89% accuracy",
          "We maintain one of the largest frozen semen banks in East Africa",
          "Our breeding success rate is 40% higher than the national average",
          "We use advanced ultrasound technology for early pregnancy detection"
        ],
        guarantees: [
          "Genetic health guarantee for registered breeding programs",
          "Free fertility assessment for breeding animals",
          "Success-based pricing for artificial insemination",
          "Lifetime breeding consultation for registered clients"
        ],
        successStory: "Working with a local dairy farmer, we implemented a strategic breeding program that increased milk production genetics over three generations. The farm's average yield per cow improved from 15 to 25 liters per day, setting a new regional benchmark for dairy breeding success.",
        myths: [
          {
            myth: "Natural breeding is always better",
            reality: "Controlled breeding programs can enhance desirable traits while minimizing genetic health risks"
          },
          {
            myth: "Breeding is just about matching two animals",
            reality: "Successful breeding requires careful genetic analysis, health screening, and timing optimization"
          },
          {
            myth: "Artificial insemination is unreliable",
            reality: "Modern AI techniques often have higher success rates than natural breeding and offer access to superior genetics"
          }
        ],
        statistics: [
          {
            label: "Success Rate",
            value: "85%"
          },
          {
            label: "Genetic Tests",
            value: "200+"
          },
          {
            label: "Breeds Supported",
            value: "50+"
          },
          {
            label: "Years Experience",
            value: "30+"
          }
        ]
      },

      parasiteControl: {
        title: "Advanced Parasite Control Solutions",
        description: "Our comprehensive parasite control program uses cutting-edge prevention and treatment technologies, combined with environmental management strategies to provide complete protection for your animals. We believe in creating parasite-free environments that promote optimal health and well-being.",
        whatWeDo: [
          "Customized parasite prevention programs using DNA-based targeting",
          "State-of-the-art parasite screening and molecular monitoring",
          "Eco-friendly environmental parasite control strategies",
          "Advanced resistance testing and management protocols",
          "Organic and chemical treatment options with proven efficacy",
          "Comprehensive staff training for ongoing prevention"
        ],
        didYouKnow: [
          "Some parasites can survive in the environment for up to 18 months without a host",
          "Our molecular testing can identify resistant parasite strains before they become a problem",
          "Our integrated approach reduces chemical usage by up to 40% while improving effectiveness",
          "Environmental management can prevent 70% of parasite problems before they start"
        ],
        guarantees: [
          "Parasite-free guarantee with our complete program - or treatment is free",
          "Comprehensive resistance testing included with annual programs",
          "Detailed environmental assessment and recommendations included",
          "Quarterly effectiveness reviews with scientific documentation"
        ],
        successStory: "When a prestigious horse stable faced a resistant parasite outbreak that threatened their racing season, our integrated approach combining strategic deworming with environmental management eliminated their parasite problem within 3 months. The stable has remained parasite-free for over a year, and their horses achieved their best racing season to date.",
        myths: [
          {
            myth: "Monthly deworming is the best approach",
            reality: "Strategic, evidence-based parasite control is more effective and reduces resistance development while saving costs"
          },
          {
            myth: "If you can't see parasites, there's no problem",
            reality: "Internal parasites often cause the most damage and require sophisticated detection methods and prevention strategies"
          },
          {
            myth: "Natural remedies don't work against parasites",
            reality: "Our integrated approach combines effective natural solutions with conventional treatments for optimal results"
          }
        ],
        statistics: [
          {
            label: "Success Rate",
            value: "99.9%"
          },
          {
            label: "Cost Reduction",
            value: "40%"
          },
          {
            label: "Prevention Rate",
            value: "95%"
          },
          {
            label: "Client Satisfaction",
            value: "98%"
          }
        ]
      },
    
      dogWalking: {
        title: "Premium Dog Walking & Exercise Programs",
        description: "Transform your dog's daily walk into an adventure of discovery and well-being. Our certified handlers provide structured exercise and socialization programs tailored to your dog's unique personality, age, breed, and energy level, ensuring physical and mental stimulation in a safe, engaging environment.",
        whatWeDo: [
          "Customized walking schedules with GPS-tracked routes",
          "Structured group play sessions with compatible companions",
          "Positive reinforcement training during walks",
          "Real-time exercise level monitoring and reporting",
          "Enrichment activities and environmental exploration",
          "Specialized programs for senior and high-energy dogs"
        ],
        didYouKnow: [
          "Regular structured walking can extend your dog's life by up to 5 years",
          "Our walks incorporate cognitive training games for mental stimulation",
          "All handlers are certified in canine first aid and behavior management",
          "We use advanced activity tracking to optimize exercise benefits"
        ],
        guarantees: [
          "Real-time GPS tracking and photo updates during walks",
          "Dedicated handler matching for consistent care",
          "100% satisfaction guarantee or walk is free",
          "Comprehensive insurance coverage for peace of mind"
        ],
        successStory: "We worked with Max, an anxious Labrador who was overweight and fearful of other dogs. Through our structured walking program and careful socialization, Max lost 8kg over 6 months and now confidently leads our group play sessions. His transformation earned us the 'Best Pet Service Provider' award and inspired our specialized anxiety management program.",
        myths: [
          {
            myth: "A quick walk around the block is enough",
            reality: "Dogs need varied environments and appropriate exercise intensity for optimal physical and mental well-being"
          },
          {
            myth: "You can't teach old dogs new walking habits",
            reality: "Our structured programs have successfully reformed walking behaviors in dogs of all ages"
          },
          {
            myth: "Group walks are too stressful for dogs",
            reality: "Our carefully managed group walks provide essential socialization and confidence building"
          }
        ],
        statistics: [
          {
            label: "Daily Walks",
            value: "150+"
          },
          {
            label: "Satisfied Dogs",
            value: "2000+"
          },
          {
            label: "Expert Handlers",
            value: "25+"
          },
          {
            label: "Success Stories",
            value: "500+"
          }
        ]
      },
    
      diseaseTreatment: {
        title: "Advanced Disease Treatment & Management",
        description: "Experience the future of veterinary medicine with our comprehensive disease treatment programs. We combine cutting-edge medical technology with holistic care approaches, focusing not just on treating symptoms, but on achieving total wellness and preventing future health issues. Our integrated approach ensures the best possible outcomes for your beloved animals.",
        whatWeDo: [
          "AI-assisted diagnostic disease screening",
          "Personalized treatment protocols using genetic insights",
          "Advanced chronic disease management programs",
          "Innovative preventive care strategies",
          "24/7 recovery monitoring with digital tracking",
          "Comprehensive rehabilitation programs"
        ],
        didYouKnow: [
          "Our treatment success rate exceeds 94% for complex diseases",
          "We use AI-powered imaging for early disease detection",
          "Our facility offers over 200 specialized treatment protocols",
          "Our recovery time is 30% faster than industry standard"
        ],
        guarantees: [
          "Transparent treatment plans with no hidden costs",
          "Daily progress updates via our digital platform",
          "24/7 emergency support throughout treatment",
          "Comprehensive aftercare support program"
        ],
        successStory: "Belle, a champion mare given a 10% survival chance due to a rare autoimmune condition, made history through our innovative treatment approach. By combining traditional medicine with cutting-edge immunotherapy, we achieved a full recovery in 6 months. Belle went on to win three major competitions the following year, becoming a symbol of hope for complex cases.",
        myths: [
          {
            myth: "Treatment is the same for all animals",
            reality: "We utilize genetic testing and personalized medicine to create unique treatment plans for each patient"
          },
          {
            myth: "Natural treatments aren't effective",
            reality: "Our integrated approach combines conventional and natural therapies for optimal healing"
          },
          {
            myth: "Recovery time can't be shortened",
            reality: "Our advanced protocols and monitoring systems significantly reduce recovery times"
          }
        ],
        statistics: [
          {
            label: "Success Rate",
            value: "94%+"
          },
          {
            label: "Specialist Vets",
            value: "20+"
          },
          {
            label: "Treatment Options",
            value: "200+"
          },
          {
            label: "Recovery Rate",
            value: "91%"
          }
        ]
      },
    
      farmVisits: {
        title: "Professional Farm Veterinary Services",
        description: "Bringing world-class veterinary care directly to your farm, our mobile service combines cutting-edge technology with practical expertise. Our specially equipped mobile units and experienced team ensure your livestock receive the highest standard of care without the stress of transportation.",
        whatWeDo: [
          "Comprehensive herd health assessments",
          "Mobile diagnostic laboratory services",
          "Emergency medical interventions",
          "Reproductive health management",
          "Preventive care programs",
          "Production optimization consulting"
        ],
        didYouKnow: [
          "Our mobile units carry advanced diagnostic equipment",
          "We provide satellite-linked health monitoring",
          "Our team includes specialists in large animal medicine",
          "We offer drone surveillance for herd monitoring"
        ],
        guarantees: [
          "Same-day emergency response guarantee",
          "Digital health records accessible 24/7",
          "Comprehensive follow-up monitoring",
          "Bio-security protocol compliance"
        ],
        successStory: "A leading dairy farm facing declining production and recurring health issues transformed their operation through our regular visit program. Within six months, milk production increased by 35%, disease occurrence dropped by 60%, and their premium milk quality rating earned them contract bonuses worth millions.",
        myths: [
          {
            myth: "Mobile services can't match clinic quality",
            reality: "Our mobile units carry advanced equipment, often surpassing local clinic capabilities"
          },
          {
            myth: "Regular visits are too costly",
            reality: "Preventive care visits significantly reduce emergency costs and production losses"
          },
          {
            myth: "Small farms don't need regular vet visits",
            reality: "Regular monitoring benefits farms of all sizes, improving profitability and animal welfare"
          }
        ],
        statistics: [
          {
            label: "Farms Served",
            value: "500+"
          },
          {
            label: "Mobile Units",
            value: "15"
          },
          {
            label: "Response Time",
            value: "<2hrs"
          },
          {
            label: "Client Retention",
            value: "98%"
          }
        ]
      },

      vaccination: {
        title: "State-of-the-Art Vaccination Programs",
        description: "Experience the future of preventive care with our advanced vaccination services. We combine the latest immunology research with precision medicine to deliver customized vaccination programs that provide optimal protection while minimizing side effects. Our international-standard protocols ensure your animals receive the most effective and safest available vaccines.",
        whatWeDo: [
          "AI-driven personalized vaccination schedules",
          "Advanced titer testing for optimized timing",
          "International travel vaccination certification",
          "Large-scale herd vaccination programs",
          "Digital vaccination tracking and reminders",
          "Reaction monitoring and management"
        ],
        didYouKnow: [
          "We maintain a perfect cold chain with 24/7 temperature monitoring",
          "Our digital tracking system has prevented over 10,000 missed vaccinations",
          "We offer specialized vaccines not available at standard clinics",
          "Our protocols exceed WHO standards for veterinary care"
        ],
        guarantees: [
          "Vaccine potency certification with every dose",
          "Lifetime digital vaccination records",
          "Free post-vaccination health monitoring",
          "Comprehensive adverse reaction support"
        ],
        successStory: "During a recent regional disease outbreak threat, our team successfully immunized over 10,000 cattle across 50 farms in just two weeks. While neighboring regions struggled with outbreaks, our clients' herds remained 100% disease-free, saving millions in potential losses and setting a new standard for rapid response vaccination programs.",
        myths: [
          {
            myth: "Over-vaccination is better for protection",
            reality: "Our evidence-based approach uses titer testing to optimize vaccination timing, providing better protection with fewer shots"
          },
          {
            myth: "All vaccines are the same",
            reality: "We source the most advanced vaccines globally, choosing specific formulations based on individual animal needs"
          },
          {
            myth: "Natural immunity is always better",
            reality: "Modern vaccines provide targeted protection while minimizing risks associated with natural exposure"
          }
        ],
        statistics: [
          {
            label: "Protection Rate",
            value: "99.9%"
          },
          {
            label: "Animals Protected",
            value: "200K+"
          },
          {
            label: "Vaccine Options",
            value: "75+"
          },
          {
            label: "Safety Rating",
            value: "100%"
          }
        ]
      },
    
      petGrooming: {
        title: "Luxury Pet Spa & Grooming Excellence",
        description: "Welcome to the ultimate pet grooming experience, where science meets luxury. Our state-of-the-art facility combines premium spa treatments with veterinary-grade care, creating a stress-free environment that transforms grooming from a necessity into a rejuvenating wellness experience for your beloved pets.",
        whatWeDo: [
          "Customized breed-specific grooming protocols",
          "Therapeutic spa treatments and aromatherapy",
          "Medical-grade skin and coat therapies",
          "Advanced dental hygiene treatments",
          "Specialized anxiety-free grooming techniques",
          "Premium nail care and paw protection"
        ],
        didYouKnow: [
          "Our grooming tables adjust automatically for perfect ergonomics",
          "We use organic, hypoallergenic products sourced globally",
          "Our facility features climate-controlled drying systems",
          "Each groomer completes 500+ hours of specialized training"
        ],
        guarantees: [
          "Fear-free grooming guarantee or service is free",
          "All-natural product assurance with ingredient tracking",
          "Live video updates during grooming sessions",
          "Satisfaction guarantee with free touch-ups"
        ],
        successStory: "Luna, a severely matted rescue dog with extreme grooming anxiety, became our greatest success story. Through our patient, fear-free approach and specialized desensitization techniques, Luna now eagerly bounds into our salon. She's become our official 'Spa Ambassador,' helping other nervous pets feel comfortable and showing the transformative power of compassionate grooming care.",
        myths: [
          {
            myth: "Professional grooming is just for show",
            reality: "Our medical-grade grooming protocols play a crucial role in preventing skin issues and detecting early health problems"
          },
          {
            myth: "Regular grooming damages natural oils",
            reality: "Our specialized techniques and products actually enhance the skin's natural protective barriers"
          },
          {
            myth: "Anxious pets can't be groomed",
            reality: "Our fear-free techniques have a 100% success rate with anxious pets, transforming their grooming experience"
          }
        ],
        statistics: [
          {
            label: "Happy Clients",
            value: "25K+"
          },
          {
            label: "Spa Services",
            value: "40+"
          },
          {
            label: "Master Groomers",
            value: "15"
          },
          {
            label: "Success Rate",
            value: "99.9%"
          }
        ]
      },
    
      dogTraining: {
        title: "Elite Dog Training & Behavior Excellence",
        description: "Experience the perfect blend of science and compassion in dog training. Our revolutionary approach combines cutting-edge behavioral science with positive reinforcement techniques, creating confident, well-adjusted dogs while strengthening the bond between pet and owner. We don't just train dogs – we transform relationships.",
        whatWeDo: [
          "Customized behavior modification programs",
          "Advanced puppy development protocols",
          "Specialized anxiety and aggression rehabilitation",
          "Competition and sport dog training",
          "Service dog certification programs",
          "Executive protection dog training"
        ],
        didYouKnow: [
          "Our success rate with aggressive dogs is 95%",
          "We use AI-powered behavior analysis for precise training",
          "Our methods are endorsed by leading behaviorists",
          "We offer lifetime graduate support services"
        ],
        guarantees: [
          "Visible improvement guarantee in first session",
          "Comprehensive behavior transformation plan",
          "Lifetime support for program graduates",
          "Stress-free training environment"
        ],
        successStory: "We transformed Rex, an aggressive German Shepherd scheduled for euthanasia, into a certified therapy dog. Through our comprehensive rehabilitation program, we discovered his aggression stemmed from medical issues and anxiety. After 12 weeks of specialized training, Rex now helps children with reading difficulties in local schools, proving that every dog deserves a chance at redemption.",
        myths: [
          {
            myth: "Some dogs are simply untrainable",
            reality: "Every dog can learn - we've successfully trained over 10,000 dogs, including 'lost causes'"
          },
          {
            myth: "Training requires force or dominance",
            reality: "Our science-based methods achieve better results through understanding and positive reinforcement"
          },
          {
            myth: "Old dogs can't learn new behaviors",
            reality: "We've successfully trained dogs of all ages - our oldest student was 15 years old"
          }
        ],
        statistics: [
          {
            label: "Success Rate",
            value: "98%"
          },
          {
            label: "Dogs Trained",
            value: "10K+"
          },
          {
            label: "Expert Trainers",
            value: "20+"
          },
          {
            label: "Training Programs",
            value: "25+"
          }
        ]
      },
    
      consultation: {
        title: "Expert Veterinary Consultation & Advisory Services",
        description: "Access world-class veterinary expertise through our comprehensive consultation services. We combine decades of clinical experience with cutting-edge diagnostic tools to provide insightful, actionable advice for both routine and complex cases. Our global network of specialists ensures you receive the most advanced and effective solutions for your animal's needs.",
        whatWeDo: [
          "Comprehensive health evaluations",
          "Virtual consultation services",
          "Multi-specialist case reviews",
          "Emergency medical planning",
          "Preventive care strategies",
          "International expert collaboration"
        ],
        didYouKnow: [
          "We offer consultations in 5 languages",
          "Our specialists contribute to leading veterinary journals",
          "We maintain partnerships with global research institutes",
          "Our diagnostic accuracy rate exceeds 95%"
        ],
        guarantees: [
          "Detailed written assessments within 24 hours",
          "Access to our global specialist network",
          "Follow-up consultation included",
          "Secure digital health record access"
        ],
        successStory: "Through our remote consultation service, we helped save a prize-winning bull in remote Kenya. Our specialist team coordinated with local vets via telemedicine, providing critical guidance that not only saved the animal but also protected the farm's entire breeding program. This case established new protocols for remote veterinary care in challenging environments.",
        myths: [
          {
            myth: "Virtual consultations aren't effective",
            reality: "Our digital platform enables accurate diagnosis and treatment planning for many conditions"
          },
          {
            myth: "Local vets have all the answers",
            reality: "Our network of specialists provides crucial expertise for complex cases that require advanced knowledge"
          },
          {
            myth: "Second opinions aren't necessary",
            reality: "Additional expert perspectives often reveal crucial insights that can improve treatment outcomes"
          }
        ],
        statistics: [
          {
            label: "Expert Network",
            value: "100+"
          },
          {
            label: "Success Rate",
            value: "97%"
          },
          {
            label: "Countries Served",
            value: "25+"
          },
          {
            label: "Languages",
            value: "5"
          }
        ]
      }
    };
    
    export const getServiceContent = (serviceId: string): ServiceContent | null => {
      return serviceContent[serviceId] || null;
    };
    
    export const getAllServiceIds = (): string[] => {
      return Object.keys(serviceContent);
    };

export default serviceContent;