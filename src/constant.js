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
      id: 3,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "Mitrajit",
      toEmail: "mitrajit2022@gmail.com",
      subject: "Re: Test mail",
      body: "Hi Mitrajit, Just wondering if you’re still interested.",
    },
  ];
  
export const inboxSidebarData = {
    status: 200,
    data: [
      {
        id: 3,
        fromName: "Shaw Adley",
        fromEmail: "shaw@getmemeetings.com",
        toName: "",
        toEmail: "mitrajit2022@gmail.com",
        cc: null,
        bcc: null,
        threadId: 1,
        messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
        inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
        references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
        subject: "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
        body: "<p>Hi Mitrajit,</p><p>Just wondering if you’re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
        isRead: true,
        folder: "INBOX",
        uid: 594,
        sentAt: "2023-11-23T04:08:45.000Z",
        archivedAt: null,
        createdAt: "2023-11-23T07:38:46.000Z",
        updatedAt: "2023-11-23T07:38:46.000Z",
        deletedAt: null,
      },
      {
        id: 4,
        fromName: "Shaw Adley",
        fromEmail: "shaw@getmemeetings.com",
        toName: "",
        toEmail: "mitrajit2022@gmail.com",
        cc: null,
        bcc: null,
        threadId: 2,
        messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
        inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
        references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
        subject: "Test mail",
        body: "<p>Test mail</p>",
        isRead: true,
        folder: "INBOX",
        uid: 594,
        sentAt: "2023-11-23T04:08:45.000Z",
        archivedAt: null,
        createdAt: "2023-11-23T07:38:46.000Z",
        updatedAt: "2023-11-23T07:38:46.000Z",
        deletedAt: null,
      },
    ],
  };
  