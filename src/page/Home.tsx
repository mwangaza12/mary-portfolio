import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Linkedin, MapPin, Briefcase, GraduationCap, Download, Calendar, Building2 } from 'lucide-react';
import mary from "../assets/mary.jpeg"
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Experience {
  role: string;
  company: string;
  period: string;
  education: string;
  description: string;
  achievements: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('about');

  const skills: string[] = [
    'Strategic Sourcing',
    'Vendor Management',
    'Contract Negotiation',
    'Inventory Management',
    'Logistics Coordination',
    'Cost Optimization',
    'Risk Management',
    'ERP Systems',
    'Supply Chain Analytics',
    'Quality Assurance',
    'Compliance & Regulations',
    'Process Improvement'
  ];

  const experience: Experience[] = [
    {
      role: 'Stores Management Specialist',
      company: 'Kilifi County Government Hospital',
      period: '2022 Jan - 2022 Apr',
      education: "Diploma attachment",
      description: 'Managed hospital inventory, optimized stock levels, and ensured timely procurement of medical supplies to support healthcare operations.',
      achievements: [
        'Reduced stockouts by 40% through improved inventory tracking',
        'Implemented a first-in-first-out (FIFO) system for medical supplies',
      ]
    },
    {
      role: 'Procurement Assistant Officer',
      company: 'Public Service Management Kilifi County',
      period: '2025 May - 2025 Aug',
      education: "Degree attachment",
      description: 'Assisted in procurement processes, vendor evaluations, and contract management to support county government operations.',
      achievements: [
        'Assisted in the procurement of goods and services worth over $500K',
        'Conducted vendor performance evaluations leading to improved service delivery',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMzIzMjMiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHpNNiA0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="shrink-0">
              <div className="relative group">
                <div className="w-48 h-48 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center overflow-hidden shadow-2xl shadow-cyan-500/30">
                    <span className="text-white text-5xl font-bold">
                      <img src={mary} alt="Default Profile" className="w-full h-full object-cover" />
                    </span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 max-w-4xl">
            
            <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
              Mary Ngazi Mokoli
            </h1>
            <p className="text-2xl text-cyan-400 mb-8 font-light">
              Procurement & Supply Chain Management Professional
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:mgazimary9@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors">
                <Mail className="w-4 h-4" />
                mgazimary9@gmail.com
              </a>
              <a href="tel:+254700000000" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors">
                <Phone className="w-4 h-4" />
                +254 742 079 380
              </a>
              <a href="https://www.linkedin.com/in/mary-mokoli-54a64637b/" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg">
                <MapPin className="w-4 h-4" />
                Kilifi, Kenya
              </span>
            </div>
            
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-6 text-lg rounded-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="inline-flex bg-slate-900 border border-slate-700 p-1 rounded-xl mb-12">
            <TabsTrigger 
              value="about"
              className="px-6 py-3 data-[state=active]:bg-cyan-600 data-[state=active]:text-white rounded-lg transition-all"
            >
              About
            </TabsTrigger>
            <TabsTrigger 
              value="experience"
              className="px-6 py-3 data-[state=active]:bg-cyan-600 data-[state=active]:text-white rounded-lg transition-all"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger 
              value="skills"
              className="px-6 py-3 data-[state=active]:bg-cyan-600 data-[state=active]:text-white rounded-lg transition-all"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger 
              value="education"
              className="px-6 py-3 data-[state=active]:bg-cyan-600 data-[state=active]:text-white rounded-lg transition-all"
            >
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8">
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4 text-lg leading-relaxed">
                <p>
                  Results-driven Procurement and Supply Chain Management professional with over 8 years of experience optimizing procurement processes, managing vendor relationships, and driving cost efficiencies. Proven track record in strategic sourcing, contract negotiation, and supply chain optimization across diverse industries.
                </p>
                <p>
                  Expertise in implementing data-driven procurement strategies, ensuring compliance with regulatory standards, and leading cross-functional teams to achieve operational excellence. Committed to leveraging technology and best practices to enhance supply chain resilience and performance.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700 hover:border-cyan-500/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-2">{job.role}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-3">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </span>
                      </div>
                      <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-600/30">
                        {job.education}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-6 leading-relaxed">{job.description}</p>
                  <div className="border-l-2 border-cyan-600 pl-6 space-y-3">
                    <p className="text-cyan-400 font-semibold mb-4">Key Achievements</p>
                    {job.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3 text-slate-300">
                        <span className="text-cyan-400 shrink-0">▹</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="skills" className="space-y-8">
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Core Competencies</CardTitle>
                <CardDescription className="text-slate-400">
                  Specialized skills in procurement and supply chain management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index}
                      className="px-4 py-2 bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300">
                    {['SAP MM/SCM', 'Oracle Procurement Cloud', 'Microsoft Dynamics 365', 'Advanced Excel & Data Analytics', 'Power BI for Supply Chain Insights'].map((skill, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300">
                    {['Negotiation & Persuasion', 'Strategic Thinking', 'Team Leadership', 'Problem Solving', 'Stakeholder Management'].map((skill, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="border-l-2 border-cyan-600 pl-6">
                    <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-600/30 mb-3">
                      2022 - 2025
                    </Badge>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Bachelor of Science in Business Administration
                    </h3>
                    <p className="text-cyan-400 mb-2">Procurement and Supply Chain Management</p>
                    <p className="text-slate-400">Kiriri Women's University of Science and Technology</p>
                  </div>
                  
                  <div className="border-l-2 border-slate-700 pl-6">
                    <Badge className="bg-slate-800 text-slate-400 border-slate-700 mb-3">
                      2021 - 2022
                    </Badge>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Diploma in Procurement and Supply Chain Management
                    </h3>
                    <p className="text-slate-400">Kiriri Women's University of Science and Technology</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-slate-400 mb-2">© 2025 Mary Ngazi Mokoli. All rights reserved.</p>
          <p className="text-slate-500">Available for procurement and supply chain management opportunities</p>
        </div>
      </footer>
    </div>
  );
}