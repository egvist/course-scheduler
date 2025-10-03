// Course data structure
const courseData = [
    // Theoretical Computer Science and Symbolic Artificial Intelligence
    {
        id: "INF-25-Ma-FTK-APSS",
        name: "Advanced Problem Solving and Search",
        hours: "2/2/0",
        language: "english",
        lecturer: "Dr. Gaggl",
        institute: "Künstliche Intelligenz",
        specialization: "theory",
        sessions: [
            { type: "V", day: "Dienstag", slot: "2.", room: "GÖR/0226/H", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "4.", room: "APB/E007/U", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "4.", room: "APB/E001/U", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "5.", room: "APB/E008/U", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "6.", room: "APB/E001/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTK-ASAI",
        name: "Advanced Symbolic Artificial Intelligence",
        hours: "4/2/0",
        language: "english",
        lecturer: "Prof. Dr. Kozma",
        institute: "Theoretische Informatik",
        specialization: "theory",
        sessions: [
            { type: "V", day: "Dienstag", slot: "4.", room: "APB/E005/U", week: "wöchentlich" },
            { type: "V", day: "Donnerstag", slot: "4.", room: "APB/E005/U", week: "wöchentlich" },
            { type: "Ü", day: "Mittwoch", slot: "2.", room: "APB/E005/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTK-ASAI-FKR",
        name: "Foundations of Knowledge Representation",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Rudolph",
        institute: "Künstliche Intelligenz",
        specialization: "theory",
        sessions: [
            { type: "V", day: "Montag", slot: "3.", room: "APB/E005/U", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "6.", room: "APB/E009/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTK-ASAI-FLP",
        name: "Foundations of Logic Programming",
        hours: "2/0/0",
        language: "english",
        lecturer: "Dr. habil. Straß",
        institute: "Künstliche Intelligenz",
        specialization: "theory",
        sessions: [
            { type: "V", day: "Montag", slot: "6.", room: "APB/E008/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTK-ASAI-IER",
        name: "Introduction to Existential Rules",
        hours: "2/0/0",
        language: "english",
        lecturer: "Prof. Rudolph",
        institute: "Künstliche Intelligenz",
        specialization: "theory",
        sessions: [
            { type: "Ü", day: "Montag", slot: "2.", room: "APB/E001/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTK-ASAI-ML",
        name: "Modal Logic",
        hours: "2/2/0",
        language: "english",
        lecturer: "Dr. Piribauer",
        institute: "Theoretische Informatik",
        specialization: "theory",
        sessions: [
            { type: "V", day: "Mittwoch", slot: "5.", room: "APB/E005/U", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "5.", room: "APB/E006/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTK-ASAI-PTSS",
        name: "Proof Theory and Sequent Systems",
        hours: "2/0/0",
        language: "english",
        lecturer: "Dr. Lyon",
        institute: "Künstliche Intelligenz",
        specialization: "theory",
        sessions: [
            { type: "Ü", day: "Freitag", slot: "2.", room: "APB/E007/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTK-CT",
        name: "Complexity Theory",
        hours: "4/2/0",
        language: "english",
        lecturer: "Prof. Krötzsch, Dr. Mennicke",
        institute: "Theoretische Informatik",
        specialization: "theory",
        sessions: [
            { type: "V", day: "Dienstag", slot: "3.", room: "MER/0E23/U", week: "wöchentlich" },
            { type: "V", day: "Montag", slot: "4.", room: "APB/E005/U", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "5.", room: "APB/E005/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTK-KM",
        name: "Knowledge Graphs",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Krötzsch",
        institute: "Theoretische Informatik",
        specialization: "theory",
        sessions: [
            { type: "V", day: "Dienstag", slot: "2.", room: "BAR/0106/H", week: "wöchentlich" },
            { type: "Ü", day: "Mittwoch", slot: "4.", room: "N63/A001/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTK-MC",
        name: "Model Checking",
        hours: "4/4/0",
        language: "english",
        lecturer: "Prof. Baier, Dr. Klüppelholz",
        institute: "Theoretische Informatik",
        specialization: "theory",
        sessions: [
            { type: "V", day: "Donnerstag", slot: "2. + 3.", room: "APB/E005/U", week: "wöchentlich" },
            { type: "Ü", day: "Freitag", slot: "2. + 3.", room: "APB/E005/U", week: "wöchentlich" }
        ]
    },
    // Software Technology and Programming Languages
    {
        id: "INF-25-Ma-FSP-CB",
        name: "Compiler Construction",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Castrillon-Mazo",
        institute: "Technische Informatik",
        specialization: "software",
        sessions: [
            { type: "TBA", day: "TBA", slot: "TBA", room: "TBA", week: "TBA" }
        ]
    },
    {
        id: "INF-25-Ma-FSP-DPF",
        name: "Design Patterns and Frameworks",
        hours: "2/2/0",
        language: "english",
        lecturer: "Dr. Götz",
        institute: "Software- und Multimediatechnik",
        specialization: "software",
        sessions: [
            { type: "V", day: "Dienstag", slot: "5.", room: "APB/E023/U", week: "wöchentlich" },
            { type: "Ü", day: "Mittwoch", slot: "5.", room: "APB/E006/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSP-FCPL",
        name: "Foundations of Certified Programming Language and Compiler Design",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Castrillon-Mazo, Dr. Ertel",
        institute: "Technische Informatik",
        specialization: "software",
        sessions: [
            { type: "V", day: "Dienstag", slot: "2.", room: "APB/E001/U", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "4.", room: "APB/E006/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSP-FSWT",
        name: "Software Engineering II",
        hours: "2/2/0",
        language: "german",
        lecturer: "Dr. Götz",
        institute: "Software- und Multimediatechnik",
        specialization: "software",
        sessions: [
            { type: "V", day: "Mittwoch", slot: "3.", room: "APB/E023/U", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "2.", room: "APB/E006/U", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "3.", room: "APB/E001/U", week: "wöchentlich" },
            { type: "Ü", day: "Mittwoch", slot: "6.", room: "APB/E008/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSP-SESAC",
        name: "Self-aware Computing Systems and Cobotics",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Aßmann, Dr. Götz",
        institute: "Software- und Multimediatechnik",
        specialization: "software",
        sessions: [
            { type: "V", day: "Donnerstag", slot: "2.", room: "MER/0003/U", week: "wöchentlich" }
        ]
    },
    // Systems Architecture
    {
        id: "INF-25-Ma-FSA-Dec",
        name: "Blockchain Technologies",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Tschorsch",
        institute: "Systemarchitektur",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Montag", slot: "4.", room: "HSZ/0201/U", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "5.", room: "HSZ/0201/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSA-DS",
        name: "Distributed Systems",
        hours: "2/2/0",
        language: "english",
        lecturer: "Dr. Springer",
        institute: "Systemarchitektur",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Donnerstag", slot: "4.", room: "APB/E023/U", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "2.", room: "N63/A001/U", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "5.", room: "APB/E023/U", week: "wöchentlich" },
            { type: "Ü", day: "Freitag", slot: "2.", room: "APB/E008/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSA-EAMA",
        name: "Engineering Adaptive Mobile Applications",
        hours: "2/2/0",
        language: "english",
        lecturer: "Dr. Springer",
        institute: "Systemarchitektur",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Freitag", slot: "3.", room: "APB/E008/U", week: "wöchentlich" },
            { type: "Ü", day: "Freitag", slot: "4.", room: "APB/E008/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSA-IoT",
        name: "IoT Communication",
        hours: "2/0/0",
        language: "english",
        lecturer: "Dr. Dargie, Prof. Wählisch",
        institute: "Software- und Multimediatechnik",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Dienstag", slot: "2.", room: "APB/E023/U", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "6.", room: "APB/E005/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSA-MOS",
        name: "Microkernel-Based Operating Systems",
        hours: "2/4/0",
        language: "english",
        lecturer: "Dr.-Ing. Roitzsch, Prof. Dr. Schirmeier",
        institute: "Systemarchitektur",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Dienstag", slot: "6.", room: "APB/E023/U", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "5.", room: "APB/E008/U", week: "1.Woche" }
        ]
    },
    {
        id: "INF-25-Ma-FSA-PET",
        name: "Prediction and Estimation Techniques",
        hours: "2/2/0",
        language: "english",
        lecturer: "Dr. Dargie",
        institute: "Software- und Multimediatechnik",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Freitag", slot: "4.", room: "APB/E007/U", week: "wöchentlich" },
            { type: "Ü", day: "Freitag", slot: "5.", room: "APB/E007/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSA-RNA",
        name: "Advanced Computer Networks",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Wählisch",
        institute: "Systemarchitektur",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Donnerstag", slot: "3.", room: "APB/E023/U", week: "wöchentlich" },
            { type: "Ü", day: "Mittwoch", slot: "3.", room: "APB/E008/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSA-SCC",
        name: "Service and Cloud Computing",
        hours: "2/2/0",
        language: "german",
        lecturer: "Dr. Braun",
        institute: "Systemarchitektur",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Dienstag", slot: "3.", room: "APB/E010/U", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "4.", room: "APB/E010/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSA-SDE",
        name: "Scalable Data Engineering",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Lehner, Dr. Hartmann",
        institute: "Systemarchitektur",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Montag", slot: "2.", room: "TOE/0317/H", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "4.", room: "APB/E010/U", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "6.", room: "APB/E010/U", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "3.", room: "APB/E009/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSA-SDM",
        name: "Scalable Data Management",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Habich",
        institute: "Systemarchitektur",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Montag", slot: "4.", room: "HSZ/0204/U", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "4.", room: "APB/E007/U", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "2.", room: "APB/E007/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FSA-SE",
        name: "Systems Engineering",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Fetzer",
        institute: "Systemarchitektur",
        specialization: "systems",
        sessions: [
            { type: "V", day: "Montag", slot: "3.", room: "APB/E023/U", week: "wöchentlich" },
            { type: "Ü", day: "Freitag", slot: "3.", room: "APB/E023/U", week: "wöchentlich" }
        ]
    },
    // Visual Computing and Machine Learning
    {
        id: "INF-25-Ma-FVC-CV",
        name: "Computer Vision I",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Dr. Andres",
        institute: "Künstliche Intelligenz",
        specialization: "visual",
        sessions: [
            { type: "V", day: "Montag", slot: "3.", room: "BEY/0E40/H", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "4.", room: "TBA", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "5.", room: "TBA", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "3.", room: "TBA", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "4.", room: "TBA", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FVC-FCG",
        name: "Computer Graphics I",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Gumhold",
        institute: "Software- und Multimediatechnik",
        specialization: "visual",
        sessions: [
            { type: "V", day: "Montag", slot: "4.", room: "TBA", week: "wöchentlich" },
            { type: "Ü", day: "Freitag", slot: "2.", room: "APB/E023/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FVC-FDV",
        name: "Data Visualization",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Gumhold, Prof. Dachselt",
        institute: "Software- und Multimediatechnik",
        specialization: "visual",
        sessions: [
            { type: "V", day: "Mittwoch", slot: "4.", room: "APB/E023/U", week: "wöchentlich" },
            { type: "Ü", day: "Mittwoch", slot: "5.", room: "APB/E023/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FVC-FVR",
        name: "Foundations of Virtual Reality",
        hours: "2/2/0",
        language: "english",
        lecturer: "Jun.-Prof. McGinity",
        institute: "Software- und Multimediatechnik",
        specialization: "visual",
        sessions: [
            { type: "V", day: "Donnerstag", slot: "3.", room: "SCH/A215/H", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "5.", room: "TBA", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "6.", room: "TBA", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FVC-ML",
        name: "Machine Learning I",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Dr. Andres",
        institute: "Künstliche Intelligenz",
        specialization: "visual",
        sessions: [
            { type: "V", day: "Freitag", slot: "2.", room: "TRE/PHYS/E", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "6.", room: "BAR/0218/U", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "6.", room: "APB/E001/U", week: "wöchentlich" },
            { type: "Ü", day: "Freitag", slot: "5.", room: "APB/E001/U", week: "wöchentlich" },
            { type: "Ü", day: "Freitag", slot: "6.", room: "APB/E001/U", week: "wöchentlich" }
        ]
    },
    // Computer Engineering and High Performance Computing
    {
        id: "INF-25-Ma-FTI-EPA",
        name: "Efficient Parallel Algorithms",
        hours: "2/2/0",
        language: "german",
        lecturer: "Prof. Nagel",
        institute: "Technische Informatik",
        specialization: "engineering",
        sessions: [
            { type: "V", day: "Dienstag", slot: "5.", room: "APB/E010/U", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "5.", room: "APB/E065/P", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTI-ETI",
        name: "Fundamentals of Computer Engineering",
        hours: "4/2/2",
        language: "german",
        lecturer: "Prof. Nagel, Prof. Castrillon-Mazo, Prof. Göhringer, Dr. Märcker",
        institute: "Technische Informatik",
        specialization: "engineering",
        sessions: [
            { type: "P", day: "Mittwoch", slot: "6.", room: "APB/E065/P", week: "wöchentlich" },
            { type: "V", day: "Dienstag", slot: "6.", room: "APB/E007/U", week: "wöchentlich" },
            { type: "V", day: "Freitag", slot: "5.", room: "APB/E006/U", week: "wöchentlich" },
            { type: "Ü", day: "Mittwoch", slot: "5.", room: "APB/E065/P", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTI-HMS",
        name: "Hardware Modeling and Simulation",
        hours: "2/2/0",
        language: "german/english",
        lecturer: "Prof. Göhringer",
        institute: "Technische Informatik",
        specialization: "engineering",
        sessions: [
            { type: "V", day: "Montag", slot: "6.", room: "SCH/A215/H", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "5.", room: "APB/E006/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTI-HPC",
        name: "High Performance Computing",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Nagel",
        institute: "Technische Informatik",
        specialization: "engineering",
        sessions: [
            { type: "V", day: "Mittwoch", slot: "2.", room: "TOE/0317/H", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "2.", room: "APB/E008/U", week: "wöchentlich" },
            { type: "Ü", day: "Mittwoch", slot: "1.", room: "TOE/0317/H", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "2.", room: "APB/E009/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTI-HPGPU",
        name: "Highly Parallel Programming of GPUs",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Nagel",
        institute: "Technische Informatik",
        specialization: "engineering",
        sessions: [
            { type: "V", day: "Montag", slot: "3.", room: "TBA", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "3.", room: "APB/E065/P", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FTI-PACS",
        name: "Performance Analysis of Computing Systems",
        hours: "2/2/0",
        language: "english",
        lecturer: "Prof. Nagel, Dr. Brunst",
        institute: "Technische Informatik",
        specialization: "engineering",
        sessions: [
            { type: "V", day: "Mittwoch", slot: "4.", room: "APB/E008/U", week: "wöchentlich" },
            { type: "Ü", day: "Donnerstag", slot: "4.", room: "TBA", week: "wöchentlich" }
        ]
    },
    // German as a Foreign Language Courses
    {
        id: "GER-A1.1-Gruppe-3",
        name: "German as a Foreign Language A1.1 Gruppe 3",
        hours: "2/2/0",
        language: "german",
        lecturer: "Sprachausbildung TU Dresden",
        institute: "Sprachausbildung TU Dresden",
        specialization: "language",
        sessions: [
            { type: "V", day: "Dienstag", slot: "4.", room: "SE1 28", week: "wöchentlich" },
            { type: "V", day: "Dienstag", slot: "5.", room: "SE1 28", week: "wöchentlich" }
        ]
    },
    {
        id: "GER-A1.1-Gruppe-4",
        name: "German as a Foreign Language A1.1 Gruppe 4",
        hours: "2/2/0",
        language: "german",
        lecturer: "Sprachausbildung TU Dresden",
        institute: "Sprachausbildung TU Dresden",
        specialization: "language",
        sessions: [
            { type: "V", day: "Mittwoch", slot: "3.", room: "SE1 215", week: "wöchentlich" },
            { type: "V", day: "Mittwoch", slot: "4.", room: "SE1 215", week: "wöchentlich" }
        ]
    },
    {
        id: "GER-A1.1-Gruppe-5",
        name: "German as a Foreign Language A1.1 Gruppe 5",
        hours: "2/2/0",
        language: "german",
        lecturer: "Sprachausbildung TU Dresden",
        institute: "Sprachausbildung TU Dresden",
        specialization: "language",
        sessions: [
            { type: "V", day: "Dienstag", slot: "6.", room: "SE1 122", week: "wöchentlich" },
            { type: "V", day: "Freitag", slot: "5.", room: "SE1 28", week: "wöchentlich" }
        ]
    },
    {
        id: "GER-A1.1-Gruppe-6",
        name: "German as a Foreign Language A1.1 Gruppe 6",
        hours: "4/0/0",
        language: "german",
        lecturer: "Sprachausbildung TU Dresden",
        institute: "Sprachausbildung TU Dresden",
        specialization: "language",
        sessions: [
            { type: "V", day: "Samstag", slot: "1.", room: "SE1 28", week: "wöchentlich (01.11.25 - 13.12.25 & 10.01.26 - 31.01.26)" },
            { type: "V", day: "Samstag", slot: "2.", room: "SE1 28", week: "wöchentlich (01.11.25 - 13.12.25 & 10.01.26 - 31.01.26)" },
            { type: "V", day: "Samstag", slot: "3.", room: "SE1 28", week: "wöchentlich (01.11.25 - 13.12.25 & 10.01.26 - 31.01.26)" },
            { type: "V", day: "Samstag", slot: "4.", room: "SE1 28", week: "wöchentlich (01.11.25 - 13.12.25 & 10.01.26 - 31.01.26)" }
        ]
    },
    {
        id: "GER-A1.1-Gruppe-7",
        name: "German as a Foreign Language A1.1 Gruppe 7",
        hours: "2/2/0",
        language: "german",
        lecturer: "Sprachausbildung TU Dresden",
        institute: "Sprachausbildung TU Dresden",
        specialization: "language",
        sessions: [
            { type: "V", day: "Mittwoch", slot: "4.", room: "SE1 29", week: "wöchentlich" },
            { type: "V", day: "Freitag", slot: "4.", room: "SE1 25", week: "wöchentlich" }
        ]
    },
    {
        id: "GER-A1.1-Gruppe-8",
        name: "German as a Foreign Language A1.1 Gruppe 8",
        hours: "2/2/0",
        language: "german",
        lecturer: "Sprachausbildung TU Dresden",
        institute: "Sprachausbildung TU Dresden",
        specialization: "language",
        sessions: [
            { type: "V", day: "Donnerstag", slot: "5.", room: "SE1 22", week: "wöchentlich" },
            { type: "V", day: "Donnerstag", slot: "6.", room: "SE1 22", week: "wöchentlich" }
        ]
    },
    {
        id: "GER-A1.1-Gruppe-9",
        name: "German as a Foreign Language A1.1 Gruppe 9",
        hours: "2/2/0",
        language: "german",
        lecturer: "Sprachausbildung TU Dresden",
        institute: "Sprachausbildung TU Dresden",
        specialization: "language",
        sessions: [
            { type: "V", day: "Montag", slot: "5.", room: "SE1 123", week: "wöchentlich" },
            { type: "V", day: "Mittwoch", slot: "5.", room: "SE1 211", week: "wöchentlich" }
        ]
    },
    // Human-Computer Interaction and Interactive Media
    {
        id: "INF-25-Ma-FHI-APC",
        name: "Audio Processing",
        hours: "0/0/4",
        language: "german",
        lecturer: "Jun.-Prof. McGinity, Dr.-Ing. Engeln",
        institute: "Software- und Multimediatechnik",
        specialization: "hci",
        sessions: [
            { type: "P", day: "TBA", slot: "TBA", room: "TBA", week: "TBA" }
        ]
    },
    {
        id: "INF-25-Ma-FHI-XIM",
        name: "Experiments in Immersive Media",
        hours: "0/0/4",
        language: "english",
        lecturer: "Jun.-Prof. McGinity",
        institute: "Software- und Multimediatechnik",
        specialization: "hci",
        sessions: [
            { type: "P", day: "TBA", slot: "TBA", room: "TBA", week: "TBA" }
        ]
    },
    // Cyber-Physical Systems
    {
        id: "INF-25-Ma-FCP-CPS",
        name: "Foundations of Cyber Physical Systems",
        hours: "2/2/0",
        language: "german/english",
        lecturer: "Prof. Wollschlaeger, Prof. Sommer",
        institute: "Angewandte Informatik",
        specialization: "cyber",
        sessions: [
            { type: "V", day: "Montag", slot: "3.", room: "APB/E008/U", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "4.", room: "APB/E008/U", week: "wöchentlich" },
            { type: "V", day: "Dienstag", slot: "6.", room: "APB/E006/U", week: "wöchentlich" },
            { type: "Ü", day: "Dienstag", slot: "7.", room: "APB/E006/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FCP-CPSM.Lab1",
        name: "Cyber-Physical Systems Modeling Lab",
        hours: "0/0/4",
        language: "german/english",
        lecturer: "Dr.-Ing. Hensel, Prof. Sommer",
        institute: "Angewandte Informatik",
        specialization: "cyber",
        sessions: [
            { type: "P", day: "Freitag", slot: "2.", room: "AVO", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FCP-CPSM.Lab2",
        name: "Cyber-Physical Systems Modeling Lab Advanced",
        hours: "0/0/4",
        language: "german/english",
        lecturer: "Prof. Sommer",
        institute: "Angewandte Informatik",
        specialization: "cyber",
        sessions: [
            { type: "P", day: "TBA", slot: "TBA", room: "TBA", week: "TBA" }
        ]
    },
    {
        id: "INF-25-Ma-FCP-EMIN",
        name: "Engineering and Management of Industrial Networks",
        hours: "4/0/0",
        language: "german",
        lecturer: "Prof. Wollschlaeger",
        institute: "Angewandte Informatik",
        specialization: "cyber",
        sessions: [
            { type: "V", day: "Dienstag", slot: "2.", room: "BEY/0E39/U", week: "wöchentlich" },
            { type: "V", day: "Montag", slot: "4.", room: "APB/E008/U", week: "wöchentlich" }
        ]
    },
    {
        id: "INF-25-Ma-FCP-ICPS.Lab",
        name: "Industrial Cyber-Physical Systems Lab",
        hours: "0/0/4",
        language: "german",
        lecturer: "Prof. Wollschlaeger",
        institute: "Angewandte Informatik",
        specialization: "cyber",
        sessions: [
            { type: "P", day: "TBA", slot: "TBA", room: "TBA", week: "TBA" }
        ]
    },
    {
        id: "INF-25-Ma-FCP-IIoT",
        name: "Industrial Internet of Things",
        hours: "3/1/0",
        language: "german",
        lecturer: "Prof. Wollschlaeger, Dr.-Ing. Hilbert",
        institute: "Angewandte Informatik",
        specialization: "cyber",
        sessions: [
            { type: "V", day: "Montag", slot: "2.", room: "APB/E008/U", week: "wöchentlich" },
            { type: "V", day: "Montag", slot: "5.", room: "APB/E001/U", week: "wöchentlich" },
            { type: "Ü", day: "Montag", slot: "6.", room: "APB/E001/U", week: "wöchentlich" }
        ]
    },
    // Secure Computing
    {
        id: "INF-25-Ma-FSC-SFT.Lab",
        name: "Software Fault Tolerance Lab",
        hours: "0/0/4",
        language: "english",
        lecturer: "Prof. Fetzer",
        institute: "Systemarchitektur",
        specialization: "secure",
        sessions: [
            { type: "P", day: "Freitag", slot: "1. + 2.", room: "TBA", week: "wöchentlich" }
        ]
    }
];

// Time slots configuration
const timeSlots = [
    { slot: "1.", start: "07:30", end: "09:00" },
    { slot: "2.", start: "09:20", end: "10:50" },
    { slot: "3.", start: "11:10", end: "12:40" },
    { slot: "4.", start: "13:00", end: "14:30" },
    { slot: "5.", start: "14:50", end: "16:20" },
    { slot: "6.", start: "16:40", end: "18:10" }
];

// Day mapping
const dayMapping = {
    "Montag": 1,
    "Dienstag": 2,
    "Mittwoch": 3,
    "Donnerstag": 4,
    "Freitag": 5,
    "Samstag": 6
};

const specializationMapping = {
    "theory": "Theoretical Computer Science and Symbolic Artificial Intelligence",
    "software": "Software Technology and Programming Languages",
    "secure": "Secure Computing",
    "systems": "Systems Architecture",
    "cyber": "Cyber-Physical Systems",
    "visual": "Visual Computing and Machine Learning",
    "hci": "Human-Computer Interaction and Interactive Media",
    "engineering": "Computer Engineering and High Performance Computing",
    "language": "Language Courses"
};

// Global variables
let selectedCourses = [];
let filteredCourses = [];
let activeFilters = ['theory', 'software', 'secure', 'systems', 'cyber', 'visual', 'hci', 'engineering', 'language'];
let activeLanguageFilters = ['english', 'german', 'german/english'];

// Function to automatically add specialization field to courses that don't have it
function addSpecializationToCourses() {
    courseData.forEach(course => {
        if (!course.specialization) {
            course.specialization = getCourseSpecialization(course);
        }
    });
}

// Function to categorize courses by specialization (fallback for courses without specialization field)
function getCourseSpecialization(course) {
    const name = course.name.toLowerCase();
    const institute = course.institute.toLowerCase();
    const id = course.id.toLowerCase();
    
    // Theoretical Computer Science and Symbolic Artificial Intelligence
    if (name.includes('advanced problem solving') || name.includes('advanced algorithms') ||
        name.includes('foundations of knowledge representation') || name.includes('foundations of logic programming') ||
        name.includes('introduction to existential rules') || name.includes('modal logic') ||
        name.includes('proof theory') || name.includes('complexity theory') ||
        name.includes('knowledge graphs') || name.includes('model checking') ||
        institute.includes('theoretische informatik') || institute.includes('künstliche intelligenz')) {
        return 'theory';
    }
    
    // Software Technology and Programming Languages
    if (name.includes('compiler construction') || name.includes('design patterns') ||
        name.includes('foundations of certified programming') || name.includes('software engineering') ||
        name.includes('model-driven software development') || name.includes('requirements engineering') ||
        name.includes('self-aware computing') || name.includes('cobotics') ||
        institute.includes('software- und multimediatechnik')) {
        return 'software';
    }
    
    // Secure Computing
    if (name.includes('software fault tolerance') || name.includes('secure') ||
        name.includes('fault tolerance') || name.includes('security')) {
        return 'secure';
    }
    
    // Systems Architecture
    if (name.includes('blockchain') || name.includes('distributed systems') ||
        name.includes('engineering adaptive mobile') || name.includes('internet measurements') ||
        name.includes('iot communication') || name.includes('microkernel') ||
        name.includes('prediction and estimation') || name.includes('advanced computer networks') ||
        name.includes('service and cloud computing') || name.includes('scalable data engineering') ||
        name.includes('scalable data management') || name.includes('systems engineering') ||
        institute.includes('systemarchitektur')) {
        return 'systems';
    }
    
    // Cyber-Physical Systems
    if (name.includes('application of computer science in automation') || name.includes('network simulation') ||
        name.includes('networked systems modeling') || name.includes('cooperative networked systems') ||
        name.includes('engineering of industrial communication') || name.includes('network management in industrial') ||
        name.includes('cyber physical systems') || name.includes('internet of things in automation') ||
        name.includes('software aspects of the industrial internet')) {
        return 'cyber';
    }
    
    // Visual Computing and Machine Learning
    if (name.includes('computer- and robot-assisted surgery') || name.includes('computer vision') ||
        name.includes('computer graphics') || name.includes('data visualization') ||
        name.includes('foundations of virtual reality') || name.includes('machine learning') ||
        institute.includes('software- und multimediatechnik') && 
        (name.includes('graphics') || name.includes('visual') || name.includes('machine learning'))) {
        return 'visual';
    }
    
    // Human-Computer Interaction and Interactive Media
    if (name.includes('audio lab') || name.includes('experimental media lab') ||
        name.includes('human-computer interaction') || name.includes('interactive media') ||
        name.includes('audio') || name.includes('media lab')) {
        return 'hci';
    }
    
    // Computer Engineering and High Performance Computing
    if (name.includes('efficient parallel algorithms') || name.includes('fundamentals of computer engineering') ||
        name.includes('hardware modeling') || name.includes('hardware simulation') ||
        name.includes('high performance computing') || name.includes('highly parallel programming') ||
        name.includes('performance analysis') || name.includes('gpu') ||
        institute.includes('technische informatik')) {
        return 'engineering';
    }
    
    // Language Courses
    if (name.includes('german as a foreign language') || 
        institute.includes('sprachausbildung')) {
        return 'language';
    }
    
    // Default fallback - try to match by institute
    if (institute.includes('theoretische informatik')) return 'theory';
    if (institute.includes('künstliche intelligenz')) return 'theory';
    if (institute.includes('software- und multimediatechnik')) return 'software';
    if (institute.includes('systemarchitektur')) return 'systems';
    if (institute.includes('technische informatik')) return 'engineering';
    
    return 'software';
}

// Storage functions
function saveSelectedCourses() {
    localStorage.setItem('university-course-scheduler-selected-courses', JSON.stringify(selectedCourses));
}

function loadSelectedCourses() {
    const saved = localStorage.getItem('university-course-scheduler-selected-courses');
    if (saved) {
        try {
            selectedCourses = JSON.parse(saved);
            return true;
        } catch (e) {
            console.error('Error loading saved courses:', e);
            selectedCourses = [];
            return false;
        }
    }
    return false;
}

function clearSavedCourses() {
    localStorage.removeItem('university-course-scheduler-selected-courses');
}

// Initialize the application
function init() {
    // Add specialization field to all courses that don't have it
    addSpecializationToCourses();
    
    generateScheduleTable();
    setupSearchFunctionality();
    setupSpecializationFilters();
    setupLanguageFilters();
    filteredCourses = courseData;
    displayCourseList(courseData);
    
    // Load saved courses
    if (loadSelectedCourses()) {
        updateScheduleTable();
        updateSelectedCoursesList();
        updateCourseListSelection();
    }
}

// Generate the schedule table
function generateScheduleTable() {
    const tbody = document.getElementById('scheduleTableBody');
    tbody.innerHTML = '';

    timeSlots.forEach(timeSlot => {
        const row = document.createElement('tr');
        
        // Time column
        const timeCell = document.createElement('td');
        timeCell.className = 'time-column';
        timeCell.innerHTML = `
            <div class="time-slot">
                ${timeSlot.start}<br>${timeSlot.end}
            </div>
        `;
        row.appendChild(timeCell);

        // Day columns (Monday to Saturday)
        for (let day = 1; day <= 6; day++) {
            const dayCell = document.createElement('td');
            dayCell.innerHTML = `
                <div class="course-slot" data-day="${day}" data-slot="${timeSlot.slot}">
                    <div class="empty-slot">Available</div>
                </div>
            `;
            row.appendChild(dayCell);
        }

        tbody.appendChild(row);
    });
}

// Display course list in sidebar
function displayCourseList(courses) {
    const container = document.getElementById('courseListContainer');
    
    if (courses.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: #6c757d; padding: 20px;">No courses found</div>';
        return;
    }

    container.innerHTML = courses.map(course => {
        const isSelected = selectedCourses.some(c => c.id === course.id);
        return `
            <div class="course-list-item ${isSelected ? 'selected' : ''}" onclick="selectCourseFromSidebar('${course.id}')">
                <div class="course-list-title">${course.name}</div>
                <div class="course-list-details">${course.lecturer}</div>
                <div class="course-list-details">${specializationMapping[course.specialization]}</div>
                <div class="course-list-meta">
                    <span>${course.language}</span>
                    <span>${course.hours}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Update course list selection status
function updateCourseListSelection() {
    const courseItems = document.querySelectorAll('.course-list-item');
    courseItems.forEach(item => {
        const courseId = item.getAttribute('onclick').match(/'([^']+)'/)[1];
        const isSelected = selectedCourses.some(c => c.id === courseId);
        if (isSelected) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

// Select course from sidebar
function selectCourseFromSidebar(courseId) {
    const course = courseData.find(c => c.id === courseId);
    if (!course) return;

    // Check if course is already selected
    const existingCourse = selectedCourses.find(c => c.id === courseId);
    if (existingCourse) {
        // If already selected, remove it
        removeCourseFromList(courseId);
            return;
        }

    // Add course
    selectCourse(courseId);
}

// Toggle filter visibility
function toggleFilters() {
    const filterContent = document.getElementById('filterContent');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (filterContent.classList.contains('show')) {
        filterContent.classList.remove('show');
        toggleIcon.textContent = '▶';
    } else {
        filterContent.classList.add('show');
        toggleIcon.textContent = '▼';
    }
}

// Select all filters
function selectAllFilters() {
    const checkboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');
    activeFilters = [];
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
        activeFilters.push(checkbox.value);
    });
    
    applyFilters();
}

// Deselect all filters
function deselectAllFilters() {
    const checkboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');
    activeFilters = [];
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    applyFilters();
}

// Toggle language filter visibility
function toggleLanguageFilters() {
    const filterContent = document.getElementById('languageFilterContent');
    const toggleIcon = document.getElementById('languageToggleIcon');
    
    if (filterContent.classList.contains('show')) {
        filterContent.classList.remove('show');
        toggleIcon.textContent = '▶';
    } else {
        filterContent.classList.add('show');
        toggleIcon.textContent = '▼';
    }
}

// Select all language filters
function selectAllLanguageFilters() {
    const checkboxes = document.querySelectorAll('.language-filters .filter-checkbox input[type="checkbox"]');
    activeLanguageFilters = [];
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
        activeLanguageFilters.push(checkbox.value);
    });
    
    applyFilters();
}

// Deselect all language filters
function deselectAllLanguageFilters() {
    const checkboxes = document.querySelectorAll('.language-filters .filter-checkbox input[type="checkbox"]');
    activeLanguageFilters = [];
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    applyFilters();
}

// Setup language filters
function setupLanguageFilters() {
    const checkboxes = document.querySelectorAll('.language-filters .filter-checkbox input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const value = this.value;
            
            if (this.checked) {
                if (!activeLanguageFilters.includes(value)) {
                    activeLanguageFilters.push(value);
                }
            } else {
                activeLanguageFilters = activeLanguageFilters.filter(filter => filter !== value);
            }
            
            applyFilters();
        });
    });
}

// Setup specialization filters
function setupSpecializationFilters() {
    const checkboxes = document.querySelectorAll('.specialization-filters .filter-checkbox input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const value = this.value;
            
            if (this.checked) {
                if (!activeFilters.includes(value)) {
                    activeFilters.push(value);
                }
            } else {
                activeFilters = activeFilters.filter(filter => filter !== value);
            }
            
            applyFilters();
        });
    });
}

// Apply search, specialization, and language filters
function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    
    // Start with all courses
    let courses = courseData;
    
    // Apply specialization filter
    if (activeFilters.length > 0) {
        courses = courses.filter(course => {
            return activeFilters.includes(course.specialization);
        });
    } else {
        // If no specialization filters are active, show no courses
        courses = [];
    }
    
    // Apply language filter
    if (activeLanguageFilters.length > 0 && courses.length > 0) {
        courses = courses.filter(course => {
            return activeLanguageFilters.includes(course.language);
        });
    } else if (activeLanguageFilters.length === 0) {
        // If no language filters are active, show no courses
        courses = [];
    }
    
    // Apply search filter
    if (query.length > 0) {
        courses = courses.filter(course => 
            course.name.toLowerCase().includes(query) ||
            course.lecturer.toLowerCase().includes(query) ||
            course.institute.toLowerCase().includes(query) ||
            course.specialization.toLowerCase().includes(query) ||
            course.id.toLowerCase().includes(query)
        );
    }
    
    filteredCourses = courses;
    displayCourseList(courses);
}

// Setup search functionality
function setupSearchFunctionality() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', function() {
        applyFilters();
    });
}


// Select a course and add it to the schedule
function selectCourse(courseId) {
    const course = courseData.find(c => c.id === courseId);
    if (!course) return;

    // Check if course is already selected
    const existingCourse = selectedCourses.find(c => c.id === courseId);
    if (existingCourse) {
        alert('This course is already in your schedule!');
        return;
    }

    // Add course with all sessions (including multiple Ü sessions)
    selectedCourses.push(course);
    
    // Save to localStorage
    saveSelectedCourses();
    
    // Update the schedule table
    updateScheduleTable();
    
    // Update selected courses list
    updateSelectedCoursesList();
    
    // Update sidebar selection
    updateCourseListSelection();
}

// Update the schedule table with selected courses
function updateScheduleTable() {
    // Clear all course slots first
    document.querySelectorAll('.course-slot').forEach(slot => {
        slot.innerHTML = '<div class="empty-slot">Available</div>';
    });

    // Group courses by day and time slot
    const scheduleMap = {};
    
    selectedCourses.forEach(course => {
        course.sessions.forEach((session, sessionIndex) => {
            if (session.day in dayMapping && session.slot !== 'TBA') {
                const day = dayMapping[session.day];
                const slot = session.slot.replace('.', '');
                
                // Handle special cases like "2. + 3."
                const slots = slot.includes('+') ? 
                    slot.split('+').map(s => s.trim()) : [slot];
                
                slots.forEach(slotNum => {
                    const key = `${day}-${slotNum}`;
                    if (!scheduleMap[key]) {
                        scheduleMap[key] = [];
                    }
                    scheduleMap[key].push({
                        course: course,
                        session: session,
                        sessionIndex: sessionIndex
                    });
                });
            }
        });
    });

    // Render courses in each time slot
    Object.keys(scheduleMap).forEach(key => {
        const [day, slotNum] = key.split('-');
        const courses = scheduleMap[key];
        const cell = document.querySelector(
            `.course-slot[data-day="${day}"][data-slot="${slotNum}."]`
        );
        
        if (cell && courses.length > 0) {
            if (courses.length === 1) {
                // Single course - full width
                const courseData = courses[0];
                const courseType = getCourseType(courseData.session.type, courseData.course.name, courseData.course.institute);
                cell.innerHTML = `
                    <div class="course-item ${courseType}" onclick="removeSession('${courseData.course.id}', ${courseData.sessionIndex}, ${day}, '${slotNum}.')">
                        <div style="font-weight: 600; font-size: 0.7rem;">${courseData.course.name}</div>
                        <div style="font-size: 0.65rem; opacity: 0.9;">
                            ${courseData.session.type} • ${courseData.session.room}
                        </div>
                    </div>
                `;
            } else {
                // Multiple courses - split the cell
                cell.innerHTML = courses.map(courseData => {
                    const courseType = getCourseType(courseData.session.type, courseData.course.name, courseData.course.institute);
                    return `
                        <div class="course-item split-course ${courseType}" onclick="removeSession('${courseData.course.id}', ${courseData.sessionIndex}, ${day}, '${slotNum}.')">
                            <div style="font-weight: 600; font-size: 0.65rem;">${courseData.course.name}</div>
                            <div style="font-size: 0.6rem; opacity: 0.9;">
                                ${courseData.session.type} • ${courseData.session.room}
                            </div>
                        </div>
                    `;
                }).join('');
            }
        }
    });

}

// Get course color scheme based on course name
function getCourseColorScheme(courseName) {
    const name = courseName.toLowerCase();
    
    // Assign color schemes based on course content
    if (name.includes('german as a foreign language') || name.includes('sprachausbildung')) {
        return 'green'; // Green scheme for German language courses
    } else if (name.includes('scalable data engineering') || name.includes('data engineering')) {
        return 'blue'; // Blue scheme for data engineering
    } else if (name.includes('scalable data management') || name.includes('data management')) {
        return 'teal'; // Teal scheme for data management
    } else if (name.includes('machine learning') || name.includes('artificial intelligence') || name.includes('computer vision')) {
        return 'purple'; // Purple for AI/ML courses
    } else if (name.includes('software') || name.includes('programming') || name.includes('compiler')) {
        return 'red'; // Red for software courses
    } else if (name.includes('network') || name.includes('distributed') || name.includes('blockchain')) {
        return 'orange'; // Orange for network/systems courses
    } else if (name.includes('theoretical') || name.includes('complexity') || name.includes('algorithm') || name.includes('problem solving')) {
        return 'indigo'; // Indigo for theoretical courses
    } else if (name.includes('computer graphics') || name.includes('virtual reality') || name.includes('visualization')) {
        return 'pink'; // Pink for graphics/visual courses
    } else if (name.includes('operating system') || name.includes('microkernel') || name.includes('hardware')) {
        return 'brown'; // Brown for systems/hardware courses
    } else if (name.includes('high performance') || name.includes('parallel') || name.includes('gpu')) {
        return 'blue'; // Blue for HPC courses
    } else {
        return 'blue'; // Default blue scheme
    }
}

// Get course type for styling with consistent color schemes
function getCourseType(type, courseName, institute) {
    const colorScheme = getCourseColorScheme(courseName);
    
    // Return the appropriate class based on session type and color scheme
    if (type === 'V') {
        // Lectures get the main color
        return `${colorScheme}-lecture`;
    } else if (type === 'Ü') {
        // Exercises get the light version
        return `${colorScheme}-exercise`;
    } else if (type === 'P') {
        // Labs get a medium version
        return `${colorScheme}-lab`;
    } else {
        // Default to exercise style
        return `${colorScheme}-exercise`;
    }
}

// Update the selected courses list
function updateSelectedCoursesList() {
    const container = document.getElementById('selectedCourseList');
    const clearButton = document.getElementById('clearAllCourses');
    const exportButton = document.getElementById('exportPdfBtn');
    
    if (selectedCourses.length === 0) {
        container.innerHTML = '<div style="color: #6c757d; font-style: italic;">No courses selected</div>';
        clearButton.style.display = 'none';
        exportButton.style.display = 'none';
        return;
    }

    container.innerHTML = selectedCourses.map(course => `
        <div class="selected-course-tag">
            ${course.name}
            <button class="remove-course" onclick="removeCourseFromList('${course.id}')">×</button>
        </div>
    `).join('');
    
    clearButton.style.display = 'block';
    exportButton.style.display = 'block';
}

// Remove a specific session from a course
function removeSession(courseId, sessionIndex, day, slot) {
    const course = selectedCourses.find(c => c.id === courseId);
    if (!course) return;

    const session = course.sessions[sessionIndex];
    if (!session) return;

    const sessionType = session.type;
    const sessionDay = session.day;
    const sessionSlot = session.slot;


    // For German courses with multiple V sessions, remove the entire course
    if (course.name.includes('German as a Foreign Language') && sessionType === 'V') {
        if (confirm(`Remove the entire German course "${course.name}"?`)) {
            removeCourseFromList(courseId);
        }
        return;
    }

    // For Ü (exercise) sessions, allow individual removal
    if (sessionType === 'Ü') {
        if (confirm(`Remove this exercise session from ${course.name}?`)) {
            // Remove the specific session
            course.sessions.splice(sessionIndex, 1);
            
            // If no sessions left, remove the entire course
            if (course.sessions.length === 0) {
                removeCourseFromList(courseId);
            } else {
                // Save changes to localStorage
                saveSelectedCourses();
                updateScheduleTable();
                updateSelectedCoursesList();
                updateCourseListSelection();
            }
        }
        return;
    }

    // For V (lecture) sessions, remove the entire course
    if (sessionType === 'V') {
        if (confirm(`Remove the course "${course.name}" from your schedule?`)) {
            removeCourseFromList(courseId);
        }
        return;
    }

    // For other session types (P, etc.), remove the entire course
    if (confirm(`Remove the course "${course.name}" from your schedule?`)) {
        removeCourseFromList(courseId);
    }
}

// Remove course from list
function removeCourseFromList(courseId) {
    // Debug: Log before removal
    console.log('Removing course:', courseId);
    console.log('Selected courses before removal:', selectedCourses.map(c => c.id));
    
    selectedCourses = selectedCourses.filter(c => c.id !== courseId);
    
    // Debug: Log after removal
    console.log('Selected courses after removal:', selectedCourses.map(c => c.id));
    
    // Save changes to localStorage
    saveSelectedCourses();
    
    updateScheduleTable();
    updateSelectedCoursesList();
    updateCourseListSelection();
}

// Remove course from specific slot (legacy function for compatibility)
function removeCourse(courseId, day, slot) {
    if (confirm('Remove this course from your schedule?')) {
        removeCourseFromList(courseId);
    }
}

// Clear all selected courses
function clearAllCourses() {
    if (selectedCourses.length === 0) {
        return;
    }
    
    if (confirm('Are you sure you want to clear all selected courses? This action cannot be undone.')) {
        selectedCourses = [];
        clearSavedCourses();
        updateScheduleTable();
        updateSelectedCoursesList();
        updateCourseListSelection();
    }
}

// Export schedule to PDF
function exportScheduleToPDF() {
    if (selectedCourses.length === 0) {
        alert('No courses selected to export!');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
    
    // Title
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Technische Universität Dresden', 20, 20);
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Course Scheduler - Master Computer Science', 20, 30);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Winter Semester 2024/25', 20, 40);
    
    // Date
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const currentDate = new Date().toLocaleDateString('en-GB');
    doc.text(`Generated on: ${currentDate}`, 20, 50);
    
    // Selected courses list
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Selected Courses:', 20, 65);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    let yPosition = 75;
    
    selectedCourses.forEach((course, index) => {
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }
        
        doc.text(`${index + 1}. ${course.name}`, 25, yPosition);
        doc.text(`   Lecturer: ${course.lecturer}`, 25, yPosition + 5);
        doc.text(`   Specialization: ${specializationMapping[course.specialization]}`, 25, yPosition + 10);
        doc.text(`   Language: ${course.language} | Hours: ${course.hours}`, 25, yPosition + 15);
        
        yPosition += 25;
    });
    
    // Schedule table
    doc.addPage();
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Weekly Schedule', 20, 20);
    
    // Prepare table data
    const tableData = [];
    const days = ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Add header
    tableData.push(days);
    
    // Add time slots and course data
    timeSlots.forEach(timeSlot => {
        const row = [`${timeSlot.start}-${timeSlot.end}`];
        
        for (let day = 1; day <= 6; day++) {
            const cell = document.querySelector(
                `.course-slot[data-day="${day}"][data-slot="${timeSlot.slot}"]`
            );
            
            if (cell && cell.querySelector('.course-item')) {
                const courseItems = cell.querySelectorAll('.course-item');
                const courseNames = Array.from(courseItems).map(item => {
                    const nameDiv = item.querySelector('div[style*="font-weight: 600"]');
                    return nameDiv ? nameDiv.textContent : 'Course';
                });
                row.push(courseNames.join('\n'));
            } else {
                row.push('');
            }
        }
        
        tableData.push(row);
    });
    
    // Generate table
    doc.autoTable({
        head: [tableData[0]],
        body: tableData.slice(1),
        startY: 30,
        styles: {
            fontSize: 8,
            cellPadding: 2,
            overflow: 'linebreak',
            halign: 'center',
            valign: 'middle'
        },
        headStyles: {
            fillColor: [0, 56, 101],
            textColor: 255,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [248, 249, 250]
        },
        columnStyles: {
            0: { halign: 'center', cellWidth: 25 },
            1: { cellWidth: 35 },
            2: { cellWidth: 35 },
            3: { cellWidth: 35 },
            4: { cellWidth: 35 },
            5: { cellWidth: 35 },
            6: { cellWidth: 35 }
        }
    });
    
    // Save the PDF
    const fileName = `TU_Dresden_Schedule_${currentDate.replace(/\//g, '-')}.pdf`;
    doc.save(fileName);
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', init);

