export const GOOGLE_LOGIN_URL = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-assessment.vercel.app";

export const GOOGLE_LOCAL_LOGIN_URL = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5174/"

//Static Data
export const staticThreads = [
    {
      id: 1,
      threadId: "123",
      fromName: "John Doe",
      fromEmail: "john.doe@example.com",
      toName: "Jane Smith",
      toEmail: "jane.smith@example.com",
      subject: "Meeting Reminder",
      body: "<p>Don't forget about our meeting tomorrow at 10 AM.</p>",
      cc: "manager@example.com",
      date: "2024-07-20T10:00:00Z",
    },
    {
      id: 2,
      threadId: "124",
      fromName: "Alice Johnson",
      fromEmail: "alice.johnson@example.com",
      toName: "Bob Brown",
      toEmail: "bob.brown@example.com",
      subject: "Project Update",
      body: "<p>The project is on track for completion next week.</p>",
      cc: "team@example.com",
      date: "2024-07-21T12:00:00Z",
    },
  ];
  
  export const staticSelectedThread = [
    
    {
        id: 2,
        threadId: "124",
        fromName: "Alice Johnson",
        fromEmail: "alice.johnson@example.com",
        toName: "Bob Brown",
        toEmail: "bob.brown@example.com",
        subject: "New Product Launch",
        body: `<p>Hi {FIRST_NAME},<br>
         I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups.</p>`,
        cc: "team@example.com",
        date: "2024-07-21T12:00:00Z",
      },
      {
        id: 3,
        fromName: "Shaw Adley",
        fromEmail: "shaw@getmemeetings.com",
        toName: "Mitrajit",
        toEmail: "mitrajit2022@gmail.com",
        subject: "Grow your product 10x",
        body: "Hi Khabib, Just wondering if you’re still interested to grow your product 10x.",
        date: "2024-07-21T12:00:00Z",
      },
  ];
  
export const threadsData = [
    {
      id: 1,
      fromEmail: "Beata@gmail.com",
      subject: "I've tried a lot and .",
      sentAt: "Mar 7",
      status: "Interested",
      campaign: "Campaign Name",
    },
    {
      id: 2,
      fromEmail: "Sanya@gmail.com",
      subject: "I've tried a lot and .",
      sentAt: "Mar 7",
      status: "Closed",
      campaign: "Campaign Name",
    },
    {
      id: 3,
      fromEmail: "william@gmail.com",
      subject: "Payment not going through",
      sentAt: "Mar 7",
      status: "Interested",
      campaign: "Campaign Name",
    },
    {
      id: 4,
      fromEmail: "johnson@gmail.com",
      subject: "Could you tell me more about it",
      sentAt: "Mar 7",
      status: "Meeting Booked",
      campaign: "Campaign Name",
    },
    {
      id: 5,
      fromEmail: "orlando@gmail.com",
      subject: "Hi, I am interested",
      sentAt: "18:30",
      status: "Meeting Completed",
      campaign: "Campaign Name",
    },
  ];