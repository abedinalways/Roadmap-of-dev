import { TopicDetail } from '../../types';

export const securityTopic: TopicDetail = {
  id: 'security',
  titleEn: 'Web Security',
  titleBn: 'ওয়েব সিকিউরিটি',
  icon: '🔒',
  descriptionEn: 'Protect your applications and user data from malicious attacks. Understand common vulnerabilities and how to mitigate them.',
  descriptionBn: 'ক্ষতিকারক আক্রমণ থেকে আপনার অ্যাপ্লিকেশন এবং ব্যবহারকারীর ডেটা সুরক্ষিত করুন। সাধারণ দুর্বলতা এবং সেগুলো কীভাবে প্রশমিত করতে হয় তা বুঝুন।',
  sections: [
    {
      level: 'Advanced',
      titleEn: 'Common Vulnerabilities (OWASP Top 10)',
      titleBn: 'সাধারণ দুর্বলতা (OWASP Top 10)',
      contentEn: 'The Open Web Application Security Project (OWASP) lists the most critical security risks. Knowing them is the first step in defense.',
      contentBn: 'ওপেন ওয়েব অ্যাপ্লিকেশন সিকিউরিটি প্রজেক্ট (OWASP) সবচেয়ে গুরুত্বপূর্ণ সিকিউরিটি ঝুঁকির তালিকা প্রকাশ করে। এগুলো জানা প্রতিরক্ষার প্রথম ধাপ।',
      pointsEn: [
        'XSS (Cross-Site Scripting): Injecting malicious scripts into web pages.',
        'CSRF (Cross-Site Request Forgery): Forcing a user to execute unwanted actions.',
        'SQL Injection: Manipulating database queries via input.',
        'Broken Access Control: Users accessing data they shouldn\'t.',
        'Security Misconfiguration & Using Components with Known Vulnerabilities.'
      ],
      pointsBn: [
        'XSS (ক্রস-সাইট স্ক্রিপ্টিং): ওয়েব পেজে ক্ষতিকারক স্ক্রিপ্ট ইনজেক্ট করা।',
        'CSRF (ক্রস-সাইট রিকোয়েস্ট ফোরজারি): ব্যবহারকারীকে অবাঞ্ছিত অ্যাকশন করতে বাধ্য করা।',
        'SQL ইনজেকশন: ইনপুটের মাধ্যমে ডেটাবেস কোয়েরি ম্যানিপুলেট করা।',
        'ব্রোকেন অ্যাক্সেস কন্ট্রোল: ব্যবহারকারীদের এমন ডেটা অ্যাক্সেস করা যা তাদের করা উচিত নয়।',
        'সিকিউরিটি মিসকনফিগারেশন এবং পরিচিত দুর্বলতা সহ কম্পোনেন্ট ব্যবহার করা।'
      ],
      code: `// Preventing XSS in React
// React escapes content by default, preventing basic XSS
const userContent = "<script>alert('Hacked!');</script>";

export function SafeComponent() {
  // This is safe. React renders it as text, not execution code.
  return <div>{userContent}</div>;
}

export function UnsafeComponent() {
  // DANGEROUS! Only use if you absolutely trust the source
  // or have sanitized the HTML using libraries like DOMPurify.
  return <div dangerouslySetInnerHTML={{ __html: userContent }} />;
}`,
      language: 'tsx'
    },
    {
      level: 'Advanced',
      titleEn: 'Authentication & Authorization',
      titleBn: 'অথেন্টিকেশন এবং অথরাইজেশন',
      contentEn: 'Authentication verifies WHO a user is. Authorization verifies WHAT they are allowed to do. Both must be implemented securely.',
      contentBn: 'অথেন্টিকেশন যাচাই করে ব্যবহারকারী কে। অথরাইজেশন যাচাই করে তাদের কী করার অনুমতি আছে। উভয়ই নিরাপদে ইমপ্লিমেন্ট করা আবশ্যক।',
      pointsEn: [
        'JWT (JSON Web Tokens): Structure, signing, and secure storage.',
        'OAuth 2.0 and OpenID Connect (OIDC).',
        'Session-based auth vs Token-based auth.',
        'Storing tokens securely: HttpOnly cookies vs LocalStorage.',
        'Implementing Role-Based Access Control (RBAC).'
      ],
      pointsBn: [
        'JWT (JSON ওয়েব টোকেন): গঠন, সাইনিং এবং সুরক্ষিত স্টোরেজ।',
        'OAuth 2.0 এবং OpenID Connect (OIDC)।',
        'সেশন-ভিত্তিক অথ বনাম টোকেন-ভিত্তিক অথ।',
        'নিরাপদে টোকেন সংরক্ষণ: HttpOnly কুকিজ বনাম LocalStorage।',
        'রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC) ইমপ্লিমেন্ট করা।'
      ],
      code: `// Secure Cookie Configuration Example (Express/Node.js)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await authenticateUser(username, password);
  
  if (user) {
    const token = generateJWT(user);
    
    // Send token in an HttpOnly, Secure cookie to prevent XSS theft
    res.cookie('auth_token', token, {
      httpOnly: true, // Cannot be accessed via document.cookie
      secure: process.env.NODE_ENV === 'production', // HTTPS only
      sameSite: 'strict', // Prevents CSRF
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });
    
    res.status(200).json({ message: 'Logged in successfully' });
  }
});`,
      language: 'javascript'
    }
  ]
};
